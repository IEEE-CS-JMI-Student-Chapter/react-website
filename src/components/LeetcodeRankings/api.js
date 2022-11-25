import axios from "axios";
import { faker } from "@faker-js/faker";
import { httpsCallable } from "firebase/functions";
import { functions } from "../../firebase";


const API = "https://ieeecs-backend.herokuapp.com";
// const API = "http://localhost:5000";

export const addRanks = async (formData) => {
  console.log("formData : ", formData);


  const addRankAPI = httpsCallable(functions, "addUser");


  const { data } = await addRankAPI(formData);

  console.log(data);

  return data;
};

export const getRanks = async () => {


  const getRankAPI = httpsCallable(functions, "getRanks");

  const { data } = await getRankAPI();
  console.log(data);


  return {
    data: data.data,
    lastUpdated: data?.lastUpdated,
    timeleft: 125 - data?.timeleft,
  };
};

export const dummyData = ({ queryKey }) => {
  const [, { count }] = queryKey;

  const data = [];
  const year = ["I", "II", "III", "IV"];
  const branch = ["CSE", "ECE", "EE", "ME", "CE", "other"];
  for (let i = 0; i < count; i++) {
    data.push({
      name: faker.name.findName(),
      branch: branch[Math.floor(Math.random() * branch.length)],
      ranking: faker.datatype.number({
        min: 1,
        max: 1000000,
      }),
      username: faker.internet.userName(),
      year: year[Math.floor(Math.random() * year.length)],
    });
  }

  console.log(data);

  return data;
};
