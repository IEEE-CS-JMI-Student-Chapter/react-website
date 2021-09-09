import React from 'react'
import classes from './Events.module.css'
import EventCard from './EventCard'
import ColouredText from './ColouredText'
import events from './EventData'

const EventList = (props) => {
    let heading, data, status;
    if(props.type === "live") {
        heading = "LIVE EVENTS";
        data = events.live;
        status = <ColouredText text="LIVE NOW" color="#53EF6C"/>;
    } else if (props.type === "previous") {
        heading = "PREVIOUS EVENTS";
        data = events.previous;
        status = <ColouredText text="ENDED" color="#FF998B"/>;
    }
    return (
        <div className={classes.live}>
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
                            btnText="ENTER"
                            btnColor="orange"
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default EventList;