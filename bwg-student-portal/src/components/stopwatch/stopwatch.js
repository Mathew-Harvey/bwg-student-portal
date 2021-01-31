import React, {useRef, useState, useEffect} from 'react'
import "./stopwatch.css";



const StopWatch = () => {
  const intervalRef = useRef();
  
  const [state, setState] = useState({
    total: 0,
    isCounting: false,
  });
  
  useEffect(() => () => clearInterval(intervalRef.current), []);
  
  const { total, isCounting } = state;

  const onStartBtnClick = () => {
    const clickTime = new Date().getTime();
    if (!isCounting) {
      intervalRef.current = setInterval(() => {
        const totalTime = total + new Date().getTime() - clickTime;
        setState({ total: totalTime, isCounting: true });
      }, 0);
    } else {
      clearInterval(intervalRef.current);
      const totalTime = total + new Date().getTime() - clickTime;
      setState({ isCounting: false, total: totalTime });
    }
  };
  
  const onClearBtnClick = () => {
    clearInterval(intervalRef.current);
    setState({ isCounting: false, total: 0 });
  };
  
  return (
    <section>
        <div className="card">
      <h1 className="headline">
        <i className="fas fa-stopwatch" />
       Stopwatch
      </h1>
    
      <div className="timer">{total} ms</div>
      <button 
        className={isCounting ? "button button--stop" : "button button--start"}
        onClick={onStartBtnClick}
      >
        {isCounting ? 'STOP' : (total != 0 ? 'CONTINUE' : 'START')}
      </button>

      <button className="button" onClick={onClearBtnClick}>
        CLEAR
      </button></div>
    </section>
  );
};

export default StopWatch

