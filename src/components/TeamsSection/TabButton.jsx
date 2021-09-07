import React from "react";
import classes from "./TeamsSection.module.css";

const TabButton = (props) => {
  const activeTabHandler = () => {
    props.setActiveTab(props.id);
  };

  return (
    <button onClick={activeTabHandler} className={`${classes["team-button"]} ${props.activeTab && classes.selected}`}>
      {props.children}
    </button>
  );
};

export default TabButton;
