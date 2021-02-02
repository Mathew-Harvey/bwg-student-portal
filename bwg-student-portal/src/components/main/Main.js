import "./Main.css";
import hello from "../../assets/hello.png";
import Chart from "../charts/Chart"
import Todos from "../todos/todos";
import StopWatch from "../stopwatch/stopwatch";

const Main = (props) => {
console.log(props.email)
  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Hi {props.name} ! Welcome to your dashboard</h1>             
          </div>
        </div>

    
        <div className="charts">
          <div className="charts__left">
            <h2>Training Tasks</h2>
            <div className="charts__left__title">
              <Todos 
              email={props.email}
              />
            </div>
          </div>
          <div className="charts__right">
            <div className="charts__right__cards">
              <div>
                <h1>Classes Attended</h1>
                
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
        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
          <div className="card">
            <div className="card_inner">
              <p className="text-primary-p">Total Hours Trained</p>
              <span className="font-bold text-title">{props.hoursTrained}</span>
            </div>
          </div>

          <div className="card">
            <div className="card_inner">
              <p className="text-primary-p">Total Class past 7 days</p>
              <span className="font-bold text-title">{props.sevenDays}</span>
            </div>
          </div>

     
              
              
              
      
        </div>
      </div>
    </main>
  );
};

export default Main;
