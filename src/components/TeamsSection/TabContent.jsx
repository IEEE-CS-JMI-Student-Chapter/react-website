import React from "react";
import classes from "./TeamsSection.module.css";

const TabContent = (props) => {
  return (
    <div>
      <p>{props.html}</p>
      {props.members.map((member) => {
        return (
          <div className={`${member.head && classes['team-head']}`}>
            <img src={member.img} alt={member.name} />
            <p>{member.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TabContent;
