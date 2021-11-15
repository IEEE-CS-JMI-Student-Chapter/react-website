import React from 'react'
import classes from '../components/Events/Events.module.css'
import EventsList from "../components/Events/assets/EventsList"

import Loading from "../images/Loading.gif"


const Events = ({events}) => {

    console.log(events);

    return (
        <div className={classes["events-container"]}>
            {events.state == false?<div class={classes["loading"]}>
                <img src={Loading}/>
            </div> : null
            }
            {events.state ? <EventsList events={events.upcoming} text="UPCOMING EVENTS"/>:null}
            {events.state ? <EventsList events={events.previous} text="PREVIOUS EVENTS"/>:null}
        </div>
    )
}

export default Events
