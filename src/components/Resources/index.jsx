import { useQuery } from "react-query";
import React, { useEffect, useState } from "react";
import { getPath, getResources } from "./api";
import Loading from "../Loading";
import FolderList from "./FolderList";
import styles from "./styles.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import DisplayBlog from "./DisplayBlog";

export const ResourcesContext = React.createContext();

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function ResourcesComponent() {
  const [shown, setShown] = useState(true);
  const [Pathdata, setPathData] = useState({
    prefixes: [],
    items: [],
  });
  const [CurrentFile, setCurrentFile] = useState({
    folder: {
      path: [],
    },
    item: {
      selected: false,
      data: {
        title: "",
        path: "",
      },
    },
  });

  const SelectFolder = (folder) => {
    setShown(false);
    setCurrentFile({
      ...CurrentFile,
      folder: {
        ...CurrentFile.folder,
        path: [...CurrentFile.folder.path, folder],
      },
    });

    setTimeout(() => {
      setShown(true);
    }, 500);
  };

  const SelectFile = (file) => {
    setCurrentFile({
      ...CurrentFile,
      item: {
        ...CurrentFile.item,
        data: file,
        selected: true,
      },
    });
  };

  const BackFile = () => {
    setCurrentFile({
      ...CurrentFile,
      item: {
        ...CurrentFile.item,
        selected: false,
      },
    });
  };

  const GoBack = () => {
    setShown(false);
    setCurrentFile({
      ...CurrentFile,
      folder: {
        ...CurrentFile.folder,
        path: CurrentFile.folder.path.slice(0, -1),
      },
    });
    setTimeout(() => {
      setShown(true);
    }, 500);
  };

  const { data, isLoading, isError } = useQuery(
    ["getResources"],
    () => getResources(),
    {
      onSuccess: (data) => {
        setPathData(data);
      },
    }
  );

  useEffect(() => {
    const folderdata = getPath(CurrentFile.folder.path, data);

    setPathData(folderdata);
  }, [CurrentFile, data]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error</div>;
  }

  console.log(data, isLoading, isError, CurrentFile.folder.path);

  return (
    <ResourcesContext.Provider
      value={{
        CurrentFile,
        setCurrentFile,
        SelectFolder,
        SelectFile,
        BackFile,
      }}
    >
      <motion.div className={styles.container}>
        <AnimatePresence>
          {CurrentFile.item.selected && (
            <motion.div
              key={"file"}
              initial={{ opacity: 0, x: -100, position: "absolute" }}
              animate={{
                opacity: 1,
                x: 0,
                width: "100%",
                position: "relative",
              }}
              exit={{
                opacity: 0,
                x: 100,
                width: "100%",
                transition: {
                  duration: 0.5,
                  delay: 0.5,
                },
              }}
              transition={{
                duration: 0.5,
                delay: 1,
              }}
            >
              <div className={styles.header}>
                <motion.button
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  onClick={() => {
                    BackFile();
                  }}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </motion.button>
              </div>
              <div>
                <DisplayBlog path={CurrentFile.item.data.path} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!CurrentFile.item.selected && (
            <motion.div
              key={"folderlist"}
              initial={{ opacity: 0, x: -100 }}
              animate={{
                opacity: 1,
                x: 0,
                width: "80vw",
              }}
              exit={{
                opacity: 0,
                x: 100,
                position: "absolute",
                transition: {
                  duration: 0.5,
                },
              }}
              transition={{
                duration: 0.5,
                delay: 1,
              }}
              style={{
                width: "100%",
                overflow: "hidden",
              }}
            >
              <div className={styles.header}>
                <motion.button
                  animate={{
                    x: CurrentFile.folder.path.length > 0 ? 0 : -10,
                    opacity: CurrentFile.folder.path.length > 0 ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  onClick={() => {
                    GoBack();
                  }}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </motion.button>

                <AnimatePresence>
                  {shown && (
                    <motion.h1
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                    >
                      {CurrentFile?.folder?.path &&
                      CurrentFile?.folder?.path.length === 0
                        ? "Resources"
                        : capitalizeFirstLetter(
                            CurrentFile.folder.path[
                              CurrentFile.folder.path.length - 1
                            ]
                          )}
                    </motion.h1>
                  )}
                </AnimatePresence>
              </div>
              <AnimatePresence>
                {shown && <FolderList data={Pathdata} />}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </ResourcesContext.Provider>
  );
}

export default ResourcesComponent;
