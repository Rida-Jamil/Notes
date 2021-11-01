import React from 'react';
import style from './Button.module.css'

function Button(props) {
    return (
        <div>
            <button className={style.btn}>{props.val}</button>
        </div>
    )
}

export default Button
