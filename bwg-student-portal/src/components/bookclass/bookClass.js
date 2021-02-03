import React from "react";
import Iframe from "react-iframe"

const Bookclass = () => {

    return (
        <div>
            <Iframe url="https://app.acuityscheduling.com/schedule.php?owner=16696944&appointmentType=category:Classes"
                position="absolute"
                width="100%"
                id="myId"
                className="myClassname"
                height="100%"
                styles={{ height: "25px" }} />

        </div>

    )
}

export default Bookclass;