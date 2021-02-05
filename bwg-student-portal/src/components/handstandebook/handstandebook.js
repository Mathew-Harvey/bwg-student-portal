import React from "react";
import Iframe from "react-iframe"
import "./bookpt.css"

const Handstandebook = () => {

    return (
        <div>
            <Iframe url="https://www.thebodyweightgym.net/handstand-ebook"
                position="absolute"
                width="100%"
                id="myId"
                className="myClassname"
                height="100%"
                styles={{ height: "25px" }} />

        </div>

    )
}

export default Handstandebook;