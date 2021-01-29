import "./Main.css";
import hello from "../../assets/hello.png";
import Chart from "../charts/Chart";

const Main = () => {
  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Hello YOUR NAME HERE</h1>
            <p>Welcome to your Gym= dashboard</p>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}
 {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
        <div className="charts__left">
            <div className="charts__left__title">
              Put photo upload here
            </div>
          </div>
          <div className="charts__right">
            <div className="charts__right__cards">
              <div>
                <h1>Classes Attended</h1>
                <p>more text here</p>
              </div>
            
            </div>
            <Chart />
          </div>

        </div>
        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
          <div className="card">
         
            <div className="card_inner">
              <p className="text-primary-p">Total Hours Trained</p>
              <span className="font-bold text-title">578</span>
            </div>
          </div>

          <div className="card">
            
            <div className="card_inner">
              <p className="text-primary-p">Total Class past 7 days</p>
              <span className="font-bold text-title">3</span>
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