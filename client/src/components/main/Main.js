import "./Main.css";
import hello from "../../assets/hello.png";
import Chart from "../charts/Chart"
import Todos from "../todos/todos";
import StopWatch from "../stopwatch/stopwatch";
import Draggable from "react-draggable";
import Photo from "../photoalbum/photo"
import Metronome from "../metronome/metronome"

const Main = (props) => {

  return (
    <main>

      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Hi {props.name} ! Welcome to your dashboard</h1>

          </div>
        </div><div className="charts">
          <Draggable>
        <div id="stopwatchDiv" className="charts__left">

          <Metronome></Metronome>
        </div></Draggable>
        <Draggable>
        <div id="stopwatchDiv" className="charts__right">
          <StopWatch></StopWatch>
        </div></Draggable>

        
          {/* <Draggable> */}
          <div className="charts__left">
            <div className="trainingTasksTitle">
              <h1>Training Tasks</h1>
            </div>
            <div>
              <Todos
                email={props.email}
              />
            </div>
          </div>


          <div className="charts__right">
            <div className="charts__right__cards">
              <div>
                <div id="chartTitle">
                  <h1>Classes Attended</h1>
                </div>
                <div id="chartContainer">
                  <Chart
                    bodyweightClass={props.bodyweightClass}
                    mobilityClass={props.mobilityClass}
                    caliClass={props.caliClass}
                    begClass={props.begClass}
                    handstandClass={props.handstandClass}
                  />
                </div>

              </div>
            </div>

          </div>


        </div>

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
          <div className="card">
            <div className="card_inner">
              <p className="text-primary-p">Total hours trained:</p>
              <span className="font-bold text-title">{props.hoursTrained} hours</span>
            </div>
          </div>

          <div className="card">
            <div className="card_inner">
              <p className="text-primary-p">Total classes in week:</p>
              <span className="font-bold text-title" >{props.sevenDays} classes</span>
            </div>
          </div>
        </div>
          
        <div  className="charts__right">
          <Photo></Photo>
        </div>
      </div>
   
     


      <div className='circle1'></div>
      <div className='circle2'></div>

    </main>
  );
};

export default Main;
