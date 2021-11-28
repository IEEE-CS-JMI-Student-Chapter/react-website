import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import style from "./singleevent.module.css";
import loading from "../../images/Loading.gif";
import getSingleEvent from "../../Functions/SingleEvent"
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const SingleEvent = (props) => {
  const { id } = useParams();

  const [data, setdata] = useState(null);

  useEffect(async () => {
    if (id !== undefined) {
      const info = await getSingleEvent(id);
      console.log("Single Event : ")
      console.log(info)
      setdata(info);
    }
  }, []);

  const setloading = () => {
    return (
      <div className={style["loading"]}>
        <img src={loading} alt="loading" />
      </div>
    );
  };

  const EventData = () => {
    return (
      <div className={style["card"]}>
        <h1>{data.title}</h1>
        <div className={style["card-body"]}>
        <img class={style["cover-photo"]} src={data.coverPhoto.url} />
        <div className={style["card-body-content"]}>
        <ReactMarkdown children={data.content.markdown} remarkPlugins={[remarkGfm]} escapeHtml={false} />
        </div>
        </div>
      </div>
    );
  };

  return <div className={style["container"]}>{data == null ? setloading() : EventData()}</div>;
};

export default SingleEvent;
