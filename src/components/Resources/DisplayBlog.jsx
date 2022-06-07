import { useQuery } from "react-query";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Loading from "../Loading";
import { getFile } from "./api";
import styles from './styles.module.scss'

function DisplayBlog({ path }) {
  const { isLoading, data, isError } = useQuery(["getFile", path], () =>
    getFile(path)
  );

  if (isLoading) return <Loading />;

  if (isError) return <>Error</>;

  return (
      <div>
          
          <ReactMarkdown
              className={styles.markdown}
        children={data}
        remarkPlugins={[remarkGfm]}
        escapeHtml={false}
      />
    </div>
  );
}

export default DisplayBlog;
