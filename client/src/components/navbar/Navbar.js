import "./Navbar.css";
import avatar from "../../assets/avatar.jpg";
import StopWatch from "../stopwatch/stopwatch"



const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__right">
        {/* <a href="#">
          <i className="fa fa-stopwatch" aria-hidden="true"></i>
        </a>
      
        <a href="#">
          <i className="fa fa-chess-clock" aria-hidden="true" tooltip = "metronome"></i>
        </a> */}

      </div>
    </nav>
  );
};

export default Navbar;