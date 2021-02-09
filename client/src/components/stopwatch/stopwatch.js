import React, {useState} from 'react';
import Timer from 'react-compound-timer';
import "./stopwatch.css"
 



 
const Stopwatch = () => {



 
   return (
 <div>
<Timer
    initialTime={0}
    startImmediately={false}
    direction="forward"
    checkpoints={[
      {
          time: 100,
          callback: () => console.log('Checkpoint A'),
      },
      {
          time: 60000 * 60 * 48 - 5000,
          callback: () => console.log('Checkpoint B'),
      }
  ]}
>
    {({ start, resume, pause, stop, reset, timerState }) => (
        <React.Fragment>
            <div id="timerdisplay">

                <Timer.Minutes /> min :
                <Timer.Seconds /> sec
              
            </div>
            {/* <div>{timerState}</div> */}
            <br />
            <div>
                <div id="stopwatchDiv">
                <button id="stopwatchBtn" onClick={start}>Start</button>
                <button id="stopwatchBtn" onClick={pause}>Pause</button>
                <button id="stopwatchBtn" onClick={resume}>Resume</button>
                <button id="stopwatchBtn" onClick={stop}>Stop</button>
                <button id="stopwatchBtn"onClick={reset}>Reset</button>
                </div>
            </div>
        </React.Fragment>
    )}
</Timer>
      
       </div>

   );
};
 
export default Stopwatch;