import React from "react";
import Iframe from "react-iframe"
import "./bookpt.css"

const Onlineclass = () => {

    return (
        <div>
            <Iframe url="https://mathew-harvey.github.io/The-Bodyweight-Gym-Online/index.html"
                position="absolute"
                width="100%"
                id="myId"
                className="myClassname"
                height="100%"
                styles={{ height: "25px" }} />

        </div>

    )
}

export default Onlineclass;

//WHY DOESN"T THIS LOAD VIDS?