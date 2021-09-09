import React from 'react'

const ColouredText = (props) => {

    return (
        <span style={{color: props.color}}>
            {props.text}
        </span>
    );
}

export default ColouredText;