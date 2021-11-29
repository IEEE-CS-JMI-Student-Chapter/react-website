import React from "react";
import classes from "./IntroPage.module.css";

const IntroPage = () => {
  return (
    <section className={classes["intro-page-container"]} id="intro">
      <div className={classes["intro-container"]}>
        <div className={classes["intro-text"]}>
          <p className={classes["heading-text"]}>
            What is <span>IEEE CS?</span>
          </p>
          <p>
            The IEEE CS society is the leading source of information,
            inspiration and collaboration in computer science and engineering.
            IEEE CS is a technology - driven society established to empower
            people to bring about changes in the community. We are an expanding
            groups of professionals that lead in computing and connecting
            members worldwide.
          </p>
          <div className={classes["logo"]}>
            <img src="assets/IEEECS.png" alt="IEEECS Logo" />
            <img src="assets/IEEEJMI.png" alt="IEEEJMI Logo" />
          </div>
        </div>

      </div>

    </section>
  );
};

export default IntroPage;
