import React, { useState } from "react";
import classes from "./Events.module.css";
import { useHistory } from "react-router";
import styled from "styled-components";

const EventBackground = styled.div`
  background-image: ${(props) => props.bg && `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${(props) => props.bg})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const EventCard = (props) => {
  const history = useHistory();
  const [btnhover, setbtn] = useState(false);

  return (
    <EventBackground bg={"https://images.unsplash.com/photo-1635701248071-ed01d3622db3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=762&q=80"} className={classes["event-card"]}>
      <div className={classes["event-details"]}>
        <h3>{props.EventName}</h3>
        <p>
          Date: <span>{props.Date}</span>
        </p>
      </div>
      <div className={classes["button-and-winner"]}>
        <button
          className={classes[`event-btn`]}
          style={{
            backgroundColor: btnhover ? "white" : props.btnColor,
            color: btnhover ? props.btnColor : "white",
          }}
          onMouseEnter={() => setbtn(true)}
          onMouseLeave={() => setbtn(false)}
          onClick={() => {
            history.push(`events/${props.id}`);
          }}
        >
          {props.btnText}
        </button>
      </div>
    </EventBackground>
  );
};

export default EventCard;
