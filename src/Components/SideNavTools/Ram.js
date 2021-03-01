import React from 'react'
import Calm from "../Images/Calm.jpg"
import Peace from "../Images/Peace.jpg"
import Wolf from "../Images/Wolf.jpg"
import "./Ram.css"
function Ram() {
    return (
        <div className="RamDiv">
            <img src={Calm} />
            <img src={Peace} />
            <img src={Wolf} />

        </div>
    )
}

export default Ram
