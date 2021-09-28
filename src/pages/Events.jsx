import React from 'react'
import EventList from '../components/Events/EventList'
import classes from '../components/Events/Events.module.css'

const Events = () => {
    return (
        <div className={classes["events-container"]}>
            <div className={classes["left-events"]}>
                <EventList type="live" />
                <EventList type="upcoming" />
            </div>
            <EventList type="previous" />
        </div>
    )
}

export default Events
