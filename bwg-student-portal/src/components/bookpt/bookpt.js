import React from "react";
import Iframe from "react-iframe"

const Bookpt = () => {

    return (
        <div>
            <Iframe url="https://www.thebodyweightgym.net/personal-training"
                position="absolute"
                width="100%"
                id="myId"
                className="myClassname"
                height="100%"
                styles={{ height: "25px" }} />

        </div>

    )
}

export default Bookpt;