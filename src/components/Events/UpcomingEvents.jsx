import React from 'react'
import classes from './Events.module.css'
import EventCard from './EventCard';
import events from './EventData'

const UpcomingEvetns = () => {
    const eventStatus = "";

    return (
        <div className={classes.upcoming}>
            <h1 className={classes.heading}>UPCOMING EVENTS</h1>
            {events && events.live.map((event) => {
                return(
                    <EventCard title={event.title} startTime={event.startTime} endTime={event.endTime} date={event.date} status={eventStatus} key={event.id} />
                );
            })}
        </div>
    );
}

export default UpcomingEvetns;