import React from 'react'
import classes from './Events.module.css'
import EventCard from './EventCard'
import ColouredText from './ColouredText'
import events from './EventData'

const EventList = (props) => {
    let heading,status, eventClass, btnText, btnColor;
    

    
    if (props.type === "previous") {
        heading = "PREVIOUS EVENTS";
        status = <ColouredText text="ENDED" color="#FF998B"/>;
        eventClass = classes.previous;
        btnText = "RESULTS";
        btnColor = "#FF998B";
    } else if (props.type === "upcoming") {
        heading = "UPCOMING EVENTS";
        status = "";
        eventClass = classes.upcoming;
        btnText = "APPLY";
        btnColor = "#FFA236";
    }

    return (
        <div className={eventClass}>
            <h1 className={classes.heading}>{heading}</h1>
            <div className={classes["event-details"]}>
                {props.data && props.data.map((event) => {
                    return(
                        <EventCard 
                            EventName={event.EventName} 
                            Date={event.Date} 
                            id={event.id}
                            btnText={btnText}
                            btnColor={btnColor}
                            winner= {event.winner ? `WINNER: ${event.winner}` : ""}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default EventList;