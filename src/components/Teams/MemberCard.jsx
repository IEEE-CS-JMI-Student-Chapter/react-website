import React, { useState } from "react";
import LazyLoad from "react-lazyload";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import classes from "./MemberCard.module.css";

const MemberCard = ({ member }) => {
  const { name, img, linkedin, github, website } = member;
  const [isLinkActive, setIsLinkActive] = useState(false);
  const handleMouseEnter = () => {
    setIsLinkActive(true);
  };

  const handleMouseLeave = () => {
    setIsLinkActive(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classes["member-card"]}
    >
      <LazyLoad height={200}>
        <img
          className={`${classes["member-image"]} ${
            isLinkActive && classes["hovered"]
          }`}
          src={img}
          alt={name}
        />
      </LazyLoad>
      <p className={classes.name}>{name}</p>
      <div className={classes.socials}>
        {linkedin && (
          <a
            target="_blank"
            rel="noreferrer"
            href={linkedin}
            className={classes["social-link"]}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        )}
        {github && (
          <a
            target="_blank"
            rel="noreferrer"
            href={github}
            className={classes["social-link"]}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        )}
        {website && (
          <a
            target="_blank"
            rel="noreferrer"
            href={website}
            className={classes["social-link"]}
          >
            <FontAwesomeIcon icon={faGoogle} />
          </a>
        )}
      </div>
    </div>
  );
};

export default MemberCard;
