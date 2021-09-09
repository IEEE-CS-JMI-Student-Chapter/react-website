import React from 'react'
import classes from './Events.module.css'
import EventCard from './EventCard'
import ColouredText from './ColouredText'
import events from './EventData'

const EventList = (props) => {
    let heading, data, status, eventClass, btnText, btnColor;
    if(props.type === "live") {
        heading = "LIVE EVENTS";
        data = events.live;
        status = <ColouredText text="LIVE NOW" color="#53EF6C"/>;
        eventClass = classes.live;
        btnText = "ENTER";
        btnColor = "#FFA236";
    } else if (props.type === "previous") {
        heading = "PREVIOUS EVENTS";
        data = events.previous;
        status = <ColouredText text="ENDED" color="#FF998B"/>;
        eventClass = classes.previous;
        btnText = "RESULTS";
        btnColor = "#FF998B";
    } else if (props.type === "upcoming") {
        heading = "UPCOMING EVENTS";
        data = events.upcoming;
        status = "";
        eventClass = classes.upcoming;
        btnText = "APPLY";
        btnColor = "#FFA236";
    }

    return (
        <div className={eventClass}>
            <h1 className={classes.heading}>{heading}</h1>
            <div className={classes["event-details"]}>
                {data && data.map((event) => {
                    return(
                        <EventCard 
                            title={event.title} 
                            startTime={event.startTime} endTime={event.endTime} 
                            date={event.date} 
                            status={status} 
                            key={event.id}
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