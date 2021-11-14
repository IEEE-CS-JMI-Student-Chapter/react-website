import React from 'react'
import classes from '../components/Events/Events.module.css'
import EventsList from "../components/Events/assets/EventsList"

const Events = ({events}) => {

    console.log(events);

    return (
        <div className={classes["events-container"]}>
            <EventsList events={events.previous} text="UPCOMING EVENTS"/>
        </div>
    )
}

export default Events
