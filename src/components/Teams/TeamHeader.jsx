import React from "react";
import classes from "./TeamHeader.module.css";

const TeamHeader = (props) => {
  const { title } = props;
  return (
    <div className={classes.title}>
      <p>{title}</p>
      <div className={classes["title-bar"]}></div>
    </div>
  );
};

export default TeamHeader;
