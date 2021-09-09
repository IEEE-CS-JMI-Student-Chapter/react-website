import React from 'react'
import classes from './Events.module.css'
import EventCard from './EventCard';

const UpcomingEvetns = () => {

    return (
        <div className={classes.upcoming}>
            <h1 className={classes.heading}>UPCOMING EVENTS</h1>
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
        </div>
    );
}

export default UpcomingEvetns;