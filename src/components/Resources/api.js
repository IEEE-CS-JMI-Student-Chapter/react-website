import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_RESOURCES_API,
});

export const getResources = async () => {
  const { data } = await api.get(`/index.json`);

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

  const file = removeYAMLBlock(res.data);

  return file;
};

const removeYAMLBlock = (file) => {
  let lines = file.split("\n");
  if (lines[0] === "---") {
    lines = lines.slice(1);

    while (lines[0] !== "---") {
      lines = lines.slice(1);
    }

    lines = lines.slice(1);
  }

  return lines.join("\n");
};
