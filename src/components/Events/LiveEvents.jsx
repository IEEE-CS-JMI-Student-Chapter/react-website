import React from 'react'
import classes from './Events.module.css'
import EventCard from './EventCard';

const LiveEvents = () => {

    return (
        <div className={classes.live}>
            <h1 className={classes.heading}>LIVE EVENTS</h1>
            <EventCard />
            <EventCard />
        </div>
    );
}

export default LiveEvents;