import React from "react";
import Button from "../UI/Button/Button"
import styles from "./success.module.css"

import {useHistory} from 'react-router-dom'

function Success(){

    const history = useHistory();

    return (
        <div className={styles['main']}>
            <h1>
                Thank you, Your Response has been submitted
            </h1>
            <Button onClick={() => {
                history.push('/')
            }}>
                Go To Home
            </Button>
        </div>
    )
}

export default Success;