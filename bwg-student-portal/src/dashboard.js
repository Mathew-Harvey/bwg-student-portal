import { useState } from "react";
import "./App.css";
import Main from "./components/main/Main";
import Chart from "./components/charts/Chart"
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";


const Dashboard = ({ handleLogout, name, hoursTrained, sevenDays, bodyweightClass, mobilityClass, caliClass, begClass, handstandClass }) => {
    const [sidebarOpen, setsidebarOpen] = useState(false);
    const openSidebar = () => {
        setsidebarOpen(true);
    };
    const closeSidebar = () => {
        setsidebarOpen(false);
    };
    return (

        <div className="container">

            
            <Navbar
                sidebarOpen={sidebarOpen}
                openSidebar={openSidebar}

            />
           
            <Main
                name={name}
                hoursTrained={hoursTrained}
                sevenDays={sevenDays}
                bodyweightClass={bodyweightClass}
                mobilityClass={mobilityClass}
                caliClass={caliClass}
                begClass={begClass}
                handstandClass={handstandClass}
                

            />
            <Sidebar
                sidebarOpen={sidebarOpen}
                closeSidebar={closeSidebar}

            />
        </div>
    );
};

export default Dashboard;