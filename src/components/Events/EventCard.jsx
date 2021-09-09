import React from 'react'
import classes from './Events.module.css'

const EventCard = (props) => {

    return (
        <div className={classes["event-card"]}>
            <div className={classes["event-details"]}>
                <p>{props.title}</p>
                <p>Timing: {props.startTime}- {props.endTime}</p>
                <p>Date: {props.date} {props.status}</p>
            </div>
            <div className={classes["button-and-winner"]}>
                Join
            </div>
        </div>
    );
}

export default EventCard;