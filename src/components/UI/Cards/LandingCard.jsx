import React from "react";
import classes from "./Cards.module.css";
const LandingCard = (props) => {
  return (
    <div className={classes["landing-card"]}>
      <div className={classes["logo-svg-text"]}>
        <div className={classes["logo-text"]}>
          <img src="assets/landingLogo.png" alt="Landing Logo" style={{width: "35vw", height: "auto"}}/>
          <div className={classes.text}>
            <p>IEEE CS is a technology driven society established to empower people to bring about changes in the community. We are expanding group of professionals that lead in computing and connecting members worldwide. Our society enables people to advance in technology by delivering tools for individuals at all stages of their professional careers.</p>
          </div>
        </div>
        <div className={classes.svg}>
          <img src="assets/HeroGraphic.svg" alt="svg" style={{width: "30vw", height: "auto"}}/>
        </div>
      </div>
      <div className={classes.letsGo}>
        <p>Let's go&gt;&gt;</p>
      </div>
    </div>
  );
};

export default LandingCard;
