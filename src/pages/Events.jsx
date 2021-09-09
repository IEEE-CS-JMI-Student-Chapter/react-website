import React from 'react'
import EventList from '../components/Events/EventList'
import UpcomingEvents from '../components/Events/UpcomingEvents'
import classes from '../components/Events/Events.module.css'

const Events = () => {
    return (
        <div className={classes["events-container"]}>
            <div className={classes["left-events"]}>
                <EventList type="live" />
                <EventList type="previous" />
            </div>
            <UpcomingEvents />
        </div>
    )
}

export default Events
