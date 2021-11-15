import React,{useEffect,useState} from 'react'

import classes from "../Events.module.css"

function List({ events, text }) {

    events.forEach(element => {
        console.log(element)
    });

    const [Date,setDate] = useState('');

    const month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "July";
    month[7] = "Aug";
    month[8] = "Sept";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";

    useEffect(() => {
        // const date = new Date(events.Date);

        // // setDate(`${date.getDay} ${month[date.getMonth()]} ${date.getYear()}`)
        
        // console.log(date.getDay())
        // console.log(date.getMonth())


    },[events]);


    return (
        <div className={classes[`list`]}>
            <h1 className={classes['head']}>
                {text}
            </h1>

            {events.length == 0 ? <div class={classes["nothingtoshow"]}> Sorry Nothing to show here :/ </div> : null}

            <div className={classes['card-container']}>
                {events.map((data) => {
                    return (<div className={classes['card']}>
                        <div className={classes['left']}>
                            <p>
                                {data.EventName}
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tortor quis phasellus erat sollicitudin et. Elementum diam, facilisis donec proin mauris...........
                            </p>
                        </div>
                        <div className={classes['right']}>
                            <p>
                                Date: {data.Date}
                            </p>

                            <button>
                                More Info
                            </button>
                        </div>
                    </div>)
                })}
            </div>

        </div>
    );
}

export default List