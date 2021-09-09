import React from 'react'
import classes from './Events.module.css'
import EventCard from './EventCard';

const PreviousEvents = () => {

    return (
        <div className={classes.previous}>
            <h1 className={classes.heading}>PREVIOUS EVENTS</h1>
            <EventCard />
            <EventCard />
            <EventCard />
        </div>
    );
}

export default PreviousEvents;