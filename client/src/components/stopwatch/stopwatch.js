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
            <div>

                <Timer.Minutes /> min :
                <Timer.Seconds /> sec
              
            </div>
            {/* <div>{timerState}</div> */}
            <br />
            <div>
                <button onClick={start}>Start</button>
                <button onClick={pause}>Pause</button>
                <button onClick={resume}>Resume</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
            </div>
        </React.Fragment>
    )}
</Timer>
      
       </div>

   );
};
 
export default Stopwatch;