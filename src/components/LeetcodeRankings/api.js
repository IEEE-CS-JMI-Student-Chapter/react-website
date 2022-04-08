import axios from "axios";
import { faker } from "@faker-js/faker";

const API = "https://ieeejmilcstats.herokuapp.com";
// const API = "http://localhost:5000";

export const addRanks = async (formData) => {
  console.log("formData : ", formData);
  const { data } = await axios.post(`${API}/lc/add`, formData);

  console.log(data);

  return data;
};

export const getRanks = async () => {
  const { data } = await axios.get(`${API}/lc/ranks`);

  console.log(data);
  return {
    data: data.data,
    lastUpdated: data.lastUpdated,
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
