import React, { useContext } from "react";
import { ResourcesContext } from ".";
import { motion } from "framer-motion";
import Card from "./Card";

function FolderList({ data }) {
  const { SelectFolder, SelectFile } = useContext(ResourcesContext);

  return (
    <motion.div
      key="list"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{
        duration: 0.5,
      }}
    >
      {data.items.map((item) => {
        return (
          <Card data={item} type="file" onClick={() => SelectFile(item)} />
        );
      })}
      {data?.prefixes.map((item) => {
        return (
          <Card
            data={item}
            type="folder"
            onClick={() => SelectFolder(item.name)}
          />
        );
      })}
    </motion.div>
  );
}

export default FolderList;
