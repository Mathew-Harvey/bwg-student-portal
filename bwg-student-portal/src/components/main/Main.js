import "./Main.css";
import hello from "../../assets/hello.png";
import Chart from "../charts/Chart"
import Todos from "../todos/todos";

const Main = (props, {bodyweightClass, mobilityClass, caliClass, begClass, handstandClass}) => {
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

        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <h2>Training Tasks</h2>
            <div className="charts__left__title">
              <Todos />
            </div>
          </div>
          <div className="charts__right">
            <div className="charts__right__cards">
              <div>
                <h1>Classes Attended</h1>
                <p>bodyweight class {props.bodyweightClass}, 
                mobility class {props.mobilityClass}, 
                Cali class {props.caliClass}, 
                NOTWORKING beginner Class {props.begClass},
                Handstand Class {props.handstandClass}
        
                
                </p>
              </div>
            </div>
            <Chart
              bodyweightClass={bodyweightClass}
            
            />
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

          <div className="card">
            <div className="card_inner">
              <p className="text-primary-p">Next Membership Payment Due</p>
              <span className="font-bold text-title">340</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
