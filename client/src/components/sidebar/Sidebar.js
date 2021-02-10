import "./Sidebar.css";
import fire from "../../fire"
import logo from "../../assets/logo.png";
import bookclass from "../../assets/bookclass.png";
import personalTrainer from "../../assets/personalTrainer.png";
import timetable1 from "../../assets/timetable1.png";
import online from "../../assets/online.png";
import handstand from "../../assets/handstand.png";
import ring from "../../assets/ring.png";
import dashboard from "../../assets/dashboard.png"
import chat from "../../assets/chat.png"
import React from "react";
import Main from "../main/Main"
import Bookclass from "../bookclass/bookClass"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";





const Sidebar = ({ sidebarOpen, closeSidebar }) => {

  const handleLogout = () => {
    fire.auth().signOut();
  };

  return (

    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
     
          <img src={logo} alt="logo" className="logo" />
     
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIconClose"
          aria-hidden="true"
        ></i>
      </div>
      <div className="sidebar__menu">
        <div>
          <nav>
           
              <div className="sidebar__link">
              <Link to="/"><p><img id="sidebarIcon" src={dashboard} alt="bookclass" />Dashboard</p></Link>
              </div>
              <div className="sidebar__link">
              <Link to="/bookclass"><p><img id="sidebarIcon" src={bookclass} alt="bookclass" />Book a class</p></Link>
              </div>
              <div className="sidebar__link">
              <Link to="/bookpt"><p><img id="sidebarIcon" src={personalTrainer} alt="bookPT" />Book a PT</p></Link>
              </div>
              <div className="sidebar__link">
              <Link to="/timetable"><p><img id="sidebarIcon" src={timetable1} alt="timetable" />View Timetable</p></Link>
              </div>
              <div className="sidebar__link">
              <Link to="/onlineclass"><p><img id="sidebarIcon" src={online} alt="online" />Join a Online Class</p></Link>
              </div>
              <div className="sidebar__link">
              <Link to="/chat"><p><img id="sidebarIcon" src={chat} alt="chat" />Join a chat room</p></Link>
              </div>
              <div className="sidebar__link">
              <Link to="/handstandebook"><p><img id="sidebarIcon" src={handstand} alt="online" />The Handstand</p></Link>
              </div>
              <div className="sidebar__link">
              <Link to="/muscleupebook"><p><img id="sidebarIcon" src={ring} alt="online" />The Ring Muscle-up</p></Link>
              </div>
          </nav>
        </div>
        <div >
          <button id="logout" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>

  )

}













//         <div className="sidebar__link">
//           <img id="sidebarIcon" src={timetable1} alt="Timetable" />
//           <a href="https://www.thebodyweightgym.net/timetable">Timetable</a>
//         </div>
//         <h2>Online Training</h2>

//         <div className="sidebar__link">
//           <img id="sidebarIcon" src={online} alt="Online" />
//           <a href="https://mathew-harvey.github.io/The-Bodyweight-Gym-Online/index.html">Online Classes</a>
//         </div>
//         <h2>Downloadable Resources</h2>
//         <div className="sidebar__link">
//           <img id="sidebarIcon" src={handstand} alt="handstand" />
//           <a href="https://download-files.wixmp.com/ugd/7232a3_3dde18aeee95426f9db211e7a7112700.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46YXBwOmU2NjYzMGU3MTRmMDQ5MGFhZWExZjE0OWIzYjY5ZTMyIiwic3ViIjoidXJuOmFwcDplNjY2MzBlNzE0ZjA0OTBhYWVhMWYxNDliM2I2OWUzMiIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sImlhdCI6MTYxMTg5MzMzMiwiZXhwIjoxNjE0NDg1MzQyLCJqdGkiOiJlZTc2YmU3MmUwOWIiLCJvYmoiOltbeyJwYXRoIjoiL3VnZC83MjMyYTNfM2RkZTE4YWVlZTk1NDI2ZjlkYjIxMWU3YTcxMTI3MDAucGRmIn1dXX0.UnmwZKBVtt_Xkew0_1uY7v9498w6Ge7V13sKkSS0yTo&filename=The+handstand+-+complete+training+guide+.pdf">Handstand Guide</a>
//         </div>
//         <div className="sidebar__link">
//           <img id="sidebarIcon" src={ring} alt="rings" />
//           <a href="https://download-files.wixmp.com/ugd/7232a3_d660203a4be64ef1b8235a3bd00f0286.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46YXBwOmU2NjYzMGU3MTRmMDQ5MGFhZWExZjE0OWIzYjY5ZTMyIiwic3ViIjoidXJuOmFwcDplNjY2MzBlNzE0ZjA0OTBhYWVhMWYxNDliM2I2OWUzMiIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sImlhdCI6MTYxMTg5MzUxOCwiZXhwIjoxNjE0NDg1NTI4LCJqdGkiOiI0YmQ2YzJiMjVkOWYiLCJvYmoiOltbeyJwYXRoIjoiL3VnZC83MjMyYTNfZDY2MDIwM2E0YmU2NGVmMWI4MjM1YTNiZDAwZjAyODYucGRmIn1dXX0.oKMM32JjSm0C6MBewk-FEwGMCvNy0-m-yrs74BYEgUM&filename=Ring+Muscle+Up+Program.pdf">Ring Muscle Up </a>
//         </div>
//         <div id="logout">
//           <button id="logout" onClick={handleLogout}>Logout</button>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Sidebar;