import React from "react";
import MemberCard from "../components/Teams/MemberCard";
// import TeamHeader from "../components/Teams/TeamHeader";
import teams from "./../helpers/teams";
import classes from "./../pages/Teams.module.css";

const Teams = (props) => {
  return (
    <div className={classes["teams-section-container"]}>
      {teams.map((team) => (
        <div className={classes["teams-container"]}>
          {/* <TeamHeader title={team.title} /> */}
          <img src={team.imageTitle} alt={team.imageTitle} />
          <div className={classes.teams} style={{ zIndex: 2 }}>
            {team.members.map((member) => (
              <MemberCard member={member} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Teams;
