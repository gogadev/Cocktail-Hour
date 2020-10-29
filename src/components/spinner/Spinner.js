import React from 'react'

import spinnerIcon from "../../assets/gif.gif"
import "./spinner.style.css"

const Spinner = () => {
    return (
        <div className="spinner">
            <img src={spinnerIcon} alt=""/>
        </div>
    )
}

export default Spinner

