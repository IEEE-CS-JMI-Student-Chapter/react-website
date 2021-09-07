import React from 'react'
import classes from './LandingSection.module.css'

const LandingSection = () => {

    return (
        <section className={classes["landing-sec-container"]}>
            <h1>LANDING SECTION</h1>
            <p>I think Landing Card and Landing Section are the same thing. If they are, then delete the landing card directory.</p>
            <p>Also set the Navbar height in vh or %, not in pixels. So that we can set the height of other sections in vh or %</p>
        </section>
    );
}

export default LandingSection;