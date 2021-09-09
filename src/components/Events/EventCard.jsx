import React from 'react'
import classes from './Events.module.css'

const EventCard = (props) => {

    return (
        <div className={classes["event-card"]}>
            <div className={classes["event-details"]}>
                <p style={{marginBlockStart: "0"}}>{props.title}</p>
                <p style={{marginBlockEnd: "0"}}>Timing: {props.startTime}- {props.endTime}</p>
                <p style={{marginBlockStart: "0"}}>Date: {props.date} ({props.status})</p>
            </div>
            <div className={classes["button-and-winner"]}>
                <button className={classes["event-btn"]}>JOIN</button>
            </div>
        </div>
    );
}

export default EventCard;