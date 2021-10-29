import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'
import classes from "./TeamsSection.module.css";

const TeamMember = (props) => {
  const member = props.member;
  const [isLinkActive, setIsLinkActive] = useState(false);
  const handleMouseEnter = () => {
    setIsLinkActive(true);
  };

  const handleMouseLeave = () => {
    setIsLinkActive(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`${classes.member}  ${member.head && classes["team-head"]}`}>
      <img className={`${classes["member-image"]} ${isLinkActive && classes["hovered"]}`} src={member.img} alt={member.name} />
      <p className={classes["member-name"]}>{member.name}</p>
      <div className={`${classes["member-links"]} ${isLinkActive && classes["hovered"]}`}>
        {member.linkedin && (
          <a target="_blank" rel="noreferrer" href={member.linkedin}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        )}
        {member.github && (
          <a target="_blank" rel="noreferrer" href={member.github}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        )}
        {member.website && (
          <a target="_blank" rel="noreferrer" href={member.website}>
            <FontAwesomeIcon icon={faGoogle} />
          </a>
        )}
      </div>
    </div>
  );
};

const TabContent = (props) => {
  return (
    <div className={`${classes["content-container"]} ${classes["content-active"]}`}>
      <div className={classes.text}>{props.html}</div>
      <div className={classes["members-container"]}>
        {props.members.map((member) => {
          return <TeamMember member={member} key={member.name} />;
        })}
      </div>
    </div>
  );
};

export default TabContent;
