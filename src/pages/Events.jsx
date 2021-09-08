import React from 'react'
import LiveEvents from '../components/Events/LiveEvents'
import UpcomingEvents from '../components/Events/UpcomingEvents'
import PreviousEvents from '../components/Events/PreviousEvents'

const Events = () => {
    return (
        <div>
            <LiveEvents />
            <UpcomingEvents />
            <PreviousEvents />
        </div>
    )
}

export default Events
