import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import style from "./singleevent.module.css";
import loading from "../../images/Loading.gif";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const SingleEvent = (props) => {
  const { id } = useParams();

  const [data, setdata] = useState(null);

  useEffect(async () => {
    if (id !== undefined) {
      const info = await axios.get(`https://ieeecsbackend.herokuapp.com/events/${id}`);
      console.log(info.data);
      setdata(info.data);
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
        <h1>{data.EventName}</h1>
        <ReactMarkdown children={data.Info} remarkPlugins={[remarkGfm]} escapeHtml={false} />
      </div>
    );
  };

  return <div className={style["container"]}>{data == null ? setloading() : EventData()}</div>;
};

export default SingleEvent;
