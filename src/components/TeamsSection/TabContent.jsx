import React, { useState } from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import classes from "./TeamsSection.module.css";

const TabContent = (props) => {
  const [content, showContent] = useState(false);
  const expandDivHandler = () => {
    setTimeout(() => {showContent(true);}, 500);
    
  };
  return (
    <div onLoad={expandDivHandler} className={`${classes["content-container"]} ${content && classes["content-active"]}`}>
      <div className={classes.text}>{props.html}</div>
      <div className={classes["members-container"]}>
   
        {props.members.map((member) => {
          return (
            
            <div key={member.name} className={`${classes.member}  ${member.head && classes["team-head"]}`}>
              <img className={classes["member-image"]} src={member.img} alt={member.name} />
              <p className={classes["member-name"]}>{member.name}</p>
            </div>
            
          );
        })}
       
      </div>
    </div>
  );
};

export default TabContent;
