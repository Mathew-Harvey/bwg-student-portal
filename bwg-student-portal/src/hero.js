import { useState } from "react";
import "./App.css";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";


const Hero = ({handleLogout}) => {
    const [sidebarOpen, setsidebarOpen] = useState(false);
    const openSidebar = () => {
        setsidebarOpen(true);
    };
    const closeSidebar = () => {
        setsidebarOpen(false);
    };
    return (

        <div className="container">
            <button onClick={handleLogout}>Logout</button>
            <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />

            <Main />
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
        </div>
    );
};

export default Hero;