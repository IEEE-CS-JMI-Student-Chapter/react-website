import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_RESOURCES_API,
});

export const getResources = async () => {
  const { data } = await api.get(`/`);

  return data;
};

export const getPath = (path, res) => {
  const folderpath = [...path];
  folderpath.forEach((folder) => {
    res = res?.prefixes?.find((item) => item.name === folder);
  });

  return res;
};

export const getFile = async (path) => {
  const res = await api.get(`/${path}`);

  console.log(res);

  return res.data;
};
