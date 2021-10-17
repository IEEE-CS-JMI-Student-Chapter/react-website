import React,{useState} from 'react'
import classes from './Events.module.css'
import { useHistory } from 'react-router';

const EventCard = (props) => {
    const history = useHistory();
    const [btnhover,setbtn] = useState(false);
    

    return (
        <div className={classes["event-card"]}>
            <div className={classes["event-details"]}>
                <p style={{marginBlockStart: "0"}}>{props.EventName}</p>
                <p style={{marginBlockStart: "0"}}>Date: <span>{props.Date}</span>
                </p>
            </div>
            <div className={classes["button-and-winner"]}>
                <span>{props.winner}</span>
                <button className={classes[`event-btn`]} 
                style={{
                    backgroundColor: btnhover? "white" : props.btnColor,
                    color: btnhover? props.btnColor: "white"
                }}
                onMouseEnter={() => setbtn(true)} 
                onMouseLeave={() => setbtn(false)} 
                onClick = {() => {
                    history.push(`events/${props.id}`)
                }}
                >
                    {props.btnText}
                </button>
            </div>
        </div>
    );
}

export default EventCard;