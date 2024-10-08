import React from "react";
import { Link } from "react-router-dom";
import { Team } from "../../json/Team";
import LinkdIn from "../../images/TeamMembers/Linkedin.svg";
import style from "./ourTeam.module.scss";
import Svg from "../UI/Svg/Svg";
import LazyLoad from "react-lazyload";
import OurTeamGraphic from "../../images/Graphics/OurTeamGraphic.png";
import OT_2 from "../../images/Graphics/OT_2.svg";
import semicircle from "../../images/Graphics/semicircle.svg";
import whitecover from "../../images/Graphics/whitecover.png";

function OurTeam() {
  return (
    <div className={style["Ourteam"]}>
      <h1>Our Team</h1>
      <Svg
        mdisplay="none"
        src={OurTeamGraphic}
        marginLeft={400}
        marginTop={-100}
      />
      <Svg mdisplay="none" src={OT_2} marginLeft={-740} marginTop={400} />
      <Svg
        mdisplay="none"
        src={whitecover}
        rotate={10}
        scale={0.8}
        marginLeft={-200}
        marginTop={-100}
      />

      <p>
        “Coming together is a beginning. Keeping together is progress. Working
        together is success.”
      </p>

      <div className={style["OurTeam-div"]}>
        {Team.map((team, index) => {
          return (
            <div className={style["team-grid"]}>
              {team.map((member, index) => {
                return (
                  <div className={style["team-member"]}>
                    <div className={style["Profile"]}>
                      <LazyLoad height={600}>
                        <img
                          className={style["Profile-pic"]}
                          src={member.img}
                          alt={member.name}
                        />
                        {member.linkedin ? (
                          <Link to="/">
                            <img
                              className={style["linkedin"]}
                              src={LinkdIn}
                              alt="linkedIn"
                            />
                          </Link>
                        ) : null}
                      </LazyLoad>
                    </div>
                    <h2>{member.name}</h2>
                    <p>{member.title}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <Svg
        src={semicircle}
        mdisplay="none"
        marginTop={-1800}
        marginLeft={500}
        rotate={30}
        scale={0.6}
      />
      <Svg
        src={semicircle}
        mdisplay="none"
        marginTop={-800}
        marginLeft={-300}
        rotate={30}
        scale={0.6}
        zIndex={-10}
      />
      <Svg
        src={semicircle}
        mdisplay="none"
        marginTop={-800}
        marginLeft={450}
        rotate={160}
        scale={0.6}
      />
      <Svg
        src={semicircle}
        mdisplay="none"
        marginTop={-300}
        marginLeft={-400}
        rotate={80}
        scale={0.6}
      />
      <Svg
        src={whitecover}
        mdisplay="none"
        rotate={10}
        scale={0.6}
        marginLeft={-600}
        marginTop={200}
      />
    </div>
  );
}

export default OurTeam;
