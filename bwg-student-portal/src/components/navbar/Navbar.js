import "./Navbar.css";
import avatar from "../../assets/avatar.jpg";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      {/* <div className="navbar__left">
        <a href="#">Subscribers</a>
        <a href="#">Video Management</a>
        <a className="active_link" href="#">
          Admin
        </a>
      </div> */}
      <div className="navbar__right">
        <a href="#">
          <i className="fa fa-stopwatch" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i className="fa fa-chess-clock" aria-hidden="true" tooltip = "metronome"></i>
        </a>
        <a href="#">
          <i className="fa fa-power-off" aria-hidden="true"></i>
        </a>

      </div>
    </nav>
  );
};

export default Navbar;