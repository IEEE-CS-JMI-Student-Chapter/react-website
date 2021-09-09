import React from 'react'
import LiveEvents from '../components/Events/LiveEvents'
import UpcomingEvents from '../components/Events/UpcomingEvents'
import PreviousEvents from '../components/Events/PreviousEvents'
import classes from '../components/Events/Events.module.css'

const Events = () => {
    return (
        <div className={classes["events-container"]}>
            <div className={classes["left-events"]}>
                <LiveEvents />
                <PreviousEvents />
            </div>
            <UpcomingEvents />
        </div>
    )
}

export default Events
