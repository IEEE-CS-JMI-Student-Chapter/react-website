import React from 'react';
// import styled from 'styled-components';
import classes from './TeamsSection.module.css';

const TeamsSection = () => {

    return (
        <section className={classes["teams-sec-container"]}>
            <div className={classes["team-container"]}>
                <div className={classes["button-container"]}>
                    <button className={`${classes["team-button"]} ${classes.selected}`}>ML/AI</button>
                    <button className={`${classes["team-button"]} ${classes.unselected}`}>DSA</button>
                    <button className={`${classes["team-button"]} ${classes.unselected}`}>WebD</button>
                </div>
            </div>
        </section>
    );
}

export default TeamsSection;