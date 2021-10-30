import React, { useState, useRef } from "react";
import classes from "./Cards.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

const LandingCard = (props) => {
  const graphicdiv = useRef(null);
  const [graphic, setgraphic] = useState(0);

  const graphicpos = (x) => {
    const rect = graphicdiv.current.getBoundingClientRect();
    console.log(rect);
    setgraphic((x - rect.left - rect.width / 2) / 20);
  };

  return (
    <div className={classes["landing-card"]}>
      <div className={classes["logo-svg-text"]}>
        <div className={classes["logo-text"]}>
          <img src="assets/landingLogo.png" alt="Landing Logo" />
          <div className={classes.text}>
            <p>
              IEEE CS is a <span className={classes["highlight"]} >technology</span> driven society established to empower people to bring about changes in the community. We are expanding group of professionals that lead in computing and
              connecting members worldwide. Our society enables people to advance in technology by delivering tools for individuals at all stages of their professional careers.
            </p>
          </div>
          <div className={classes["link"]}>
            <span className={classes["letsGo"]}>
              <a href="/events">Let's Go</a>
              <span id={classes["icon"]}>
                <FontAwesomeIcon icon={icons.faAngleDoubleRight} />
              </span>
            </span>
          </div>
        </div>
        <div className={classes["svg"]}>
          <div className={classes["image"]}>
            <motion.div
              ref={graphicdiv}
              className="graphic"
              onMouseLeave={() => setgraphic(0)}
              onMouseMove={(e) => {
                graphicpos(e.clientX);
              }}
              animate={{
                rotateX: 0,

                rotateZ: graphic,
                originY: 0.5,
                originX: 0.57,
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img src="assets/HeroGraphic.png" alt="" />
            </motion.div>
            <img className={classes["ground"]} src="assets/HeroGround.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingCard;
