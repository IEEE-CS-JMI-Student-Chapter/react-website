import React,{useEffect,useState} from 'react'
import { useHistory } from 'react-router';
import classes from "../Events.module.css"

function List({ events, text }) {
    const history = useHistory();
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
                                {data.title}
                            </p>
                            <p>
                                {data.excerpt}
                            </p>
                        </div>
                        <div className={classes['right']}>
                            <p>
                                Date: {data.date}
                            </p>

                            <button onClick={ () => {
                                history.push(`/events/${data.slug}`)
                            }}>
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