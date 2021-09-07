import React from "react";
import classes from "./TeamsSection.module.css";

const TabContent = (props) => {
  return (
    <div className={classes["content-container"]}>
      <p className={classes.text}>{props.html}</p>
      <div className={classes["members-container"]}>
      {props.members.map((member) => {
        return (
          <div className={`${classes.members}  ${member.head && classes["team-head"]}`}>
            <img className={classes["member-image"]} src={member.img} alt={member.name} />
            <p className={classes["member-name"]}>{member.name}</p>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default TabContent;
