import React from 'react'

function Input(props) {
    return (
        <input
            type={props.type}
            id={props.type}
            name={props.type}
            value={props.value}
            onChange={(e) => {
                props.change(e.target.value);
            }}
        />
    )
}

export default Input
