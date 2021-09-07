import React from "react";
import classes from "./Cards.module.css";
const LandingCard = (props) => {
  return <div className={classes["landing-card"]}>{props.children}</div>;
};

export default LandingCard;
