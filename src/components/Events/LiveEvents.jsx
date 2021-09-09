import React from 'react'
import classes from './Events.module.css'
import EventCard from './EventCard'
import events from './EventData'

const LiveEvents = () => {
    const eventStatus = "(LIVE NOW)";
    return (
        <div className={classes.live}>
            <h1 className={classes.heading}>LIVE EVENTS</h1>
            <div className={classes["event-details"]}>
                {events && events.live.map((event) => {
                    return(
                        <EventCard title={event.title} startTime={event.startTime} endTime={event.endTime} date={event.date} status={eventStatus} key={event.id} />
                    );
                })}
            </div>
        </div>
    );
}

export default LiveEvents;