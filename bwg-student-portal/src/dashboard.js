import { useState } from "react";
import "./App.css";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";


const Dashboard = ({handleLogout, name}) => {
    const [sidebarOpen, setsidebarOpen] = useState(false);
    const openSidebar = () => {
        setsidebarOpen(true);
    };
    const closeSidebar = () => {
        setsidebarOpen(false);
    };
    return (

        <div className="container">
            {/* {user} */}
            <button onClick={handleLogout}>Logout</button>
            <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />

            <Main name={name} />
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
        </div>
    );
};

export default Dashboard;