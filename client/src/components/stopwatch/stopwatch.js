import React, {useState} from 'react';
import ReactTimerStopwatch from 'react-stopwatch-timer';
import "./stopwatch.css"
 
const fromTime = new Date(0, 0, 0, 0, 10, 0, 0);
 
const Stopwatch = () => {
 
   const [isOn, setIsOn] = useState(false);
 
   return (
 <div>
       <ReactTimerStopwatch isOn={isOn} className="react-stopwatch-timer__table" watchType="timer"
                            displayCircle={true} color="gray" hintColor="red" fromTime={fromTime} displayHours={false}>
           <button onClick={() => setIsOn(true) }>START</button>
           <button onClick={() => setIsOn(false) }>STOP</button>
       </ReactTimerStopwatch>
       </div>

   );
};
 
export default Stopwatch;