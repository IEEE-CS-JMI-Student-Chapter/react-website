const functions = require("firebase-functions");
const axios = require("axios");
const dayjs = require("dayjs");
const localizedFormat = require("dayjs/plugin/localizedFormat");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone"); // dependent
const cors = require('cors')({ origin: true });
const admin = require('firebase-admin');
const serviceAccount = require('./servicekey.json');
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat);

const projectID = "ieee-cs-d6484";
const LEETCODE_API = "http://leetcode.ieeejmi.org"

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});



// const COLLECTION_NAME = "lcranking";
const db = admin.firestore();
const offensiveTextCheck = async (text) => {
    const dataOffensiveRef = db.collection("gaali");
    const dataOffensive = (await dataOffensiveRef.listDocuments())[0];
    const doc = (await dataOffensive.get()).data();
    return doc?.Blocked.some((word) => text.includes(word));
};

exports.validateUser = functions.https.onRequest(async (req, res) => {
    cors(req, res, async () => {
        const text = req.query?.text;
        const isOffensive = false
        res.json({
            text,
            isOffensive,
        });
    })

});

exports.addUser = functions.https.onRequest(async (req, res) => {

    cors(req, res, async () => {
        console.log(req.body.data)
        const { name, email, username, branch, year } = req.body.data;

        if (!name || !email || !username || !branch || !year) {
            console.log("Error : Invalid Data");
            return res.json({
                data: {
                    status: "error",
                    message: "Invalid Parameters",
                }
            });
        }

        try {
            // const { isBlocked } = await offensiveTextCheck(name);

            // if (isBlocked)
            //     return {
            //         success: false,
            //         message: "Your name contains offensive words",
            //     };

            const resp = await axios.get(`${LEETCODE_API}/${username}`);
            const data = await resp.data;

            console.log(data);

            const { ranking, totalSolved, easySolved, mediumSolved, hardSolved } = data;

            if (ranking === 0) throw new Error("Undefined ranking");

            const user = {
                name,
                email,
                username,
                branch,
                year,
                ranking,
                totalSolved,
                easySolved,
                mediumSolved,
                hardSolved,
            };

            await db.collection("lcranking").doc(username).set(user);

            res.json({
                data: {
                    success: true,
                    message: "User added successfully",
                }
            });
        } catch (error) {
            console.log("Error : ", error);
            res.send({
                data: {
                    success: false,
                    message: error.message,
                }
            });
        }

    })

});

const validateRanks = async () => {
    // Check if data is updated
    let updated;
    try {
        const dataRef = db.collection("lcInfo");
        const data = (await dataRef.listDocuments())[0];
        const doc = (await data.get()).data();
        updated = dayjs(doc?.updated);
        const now = dayjs();

        if (now.diff(updated, "hours") > 1) {
            console.log("Data is not updated");
            data.set({
                updated: now.format("YYYY-MM-DD HH:mm:ss"),
            });
            return {
                isValidated: false,
                updated: updated.format("YYYY-MM-DD HH:mm:ss"),
                timeleft: now.diff(updated, "minutes"),
            };
        }
        return {
            isValidated: true,
            updated: updated.format("YYYY-MM-DD HH:mm:ss"),
            timeleft: now.diff(updated, "minutes"),
        };
    } catch (error) {
        console.log(error);
        return {
            isValidated: true,
            updated: updated?.format("YYYY-MM-DD HH:mm:ss"),
            timeleft: dayjs().diff(updated, "minutes"),
        };
    }
};

const updateRanks = async () => {
    const dataRef = db.collection("lcranking");
    const data = await dataRef.listDocuments();

    console.log(data);

    const newData = await Promise.all(
        data.map(async (item) => {
            const doc = (await item.get()).data();
            const resp = await fetch(`${LEETCODE_API}/${doc.username}`);
            const data = await resp.json();
            const { ranking, totalSolved, easySolved, mediumSolved, hardSolved } = data;
            return {
                ...doc,
                ranking,
                totalSolved,
                easySolved,
                mediumSolved,
                hardSolved,
            };
        })
    );

    console.log("Updated Ranks", newData);

    newData.forEach(async (item) => {
        await db.collection("lcranking").doc(item.username).set(item);
    });
};

exports.getRanks = functions.https.onRequest(async (req, res) => {
    // Check if data is updated
    cors(req, res, async () => {
        const { isValidated, updated, timeleft } = await validateRanks();

        if (!isValidated) {
            console.log("Data is not updated");
            updateRanks();
        } else {
            console.log("Data is updated");
        }
        try {
            const dataRef = db.collection("lcranking");
            const data = await dataRef.listDocuments();
            const rankingData = await Promise.all(
                data.map(async (item) => (await item.get()).data())
            );

            console.log(rankingData);
            console.log(updated);

            const result = {
                success: true,
                message: "Ranks fetched successfully",
                data: rankingData,
                lastUpdated: dayjs(updated).tz("Asia/Calcutta").format("LLL"),
                timeleft: timeleft,
            };

            console.log({
                data: result,
            });

            res.json({
                data: result,
            });
        } catch (error) {
            console.log(error);
            res.json({
                success: false,
                message: "Error fetching ranks",
            });
        }
    })

});
