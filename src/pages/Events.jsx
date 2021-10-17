import React from 'react'
import EventList from '../components/Events/EventList'
import classes from '../components/Events/Events.module.css'

const Events = ({events}) => {
    return (
        <div className={classes["events-container"]}>
            <EventList type="upcoming" data={events.upcoming}/>
            <EventList type="previous" data={events.previous}/>
        </div>
    )
}

export default Events
