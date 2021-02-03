import { useState } from "react";
import "./App.css";
import Main from "./components/main/Main";
import Chart from "./components/charts/Chart"
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Bookclass from "./components/bookclass/bookClass"
import Bookpt from "./components/bookpt/bookpt"
import Timetable from "./components/timetable/timetable"
import Onlineclass from "./components/onlineclasses/onlineclass"
import Handstandebook from "./components/handstandebook/handstandebook"


const Dashboard = ({ handleLogout, email, name, hoursTrained, sevenDays, bodyweightClass, mobilityClass, caliClass, begClass, handstandClass }) => {
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

            <Router>
                <Switch>
                    <Route exact path="/">
                        <Main
                            name={name}
                            email={email}
                            hoursTrained={hoursTrained}
                            sevenDays={sevenDays}
                            bodyweightClass={bodyweightClass}
                            mobilityClass={mobilityClass}
                            caliClass={caliClass}
                            begClass={begClass}
                            handstandClass={handstandClass}
                        />
                    </Route>
                    <Route exact path="/bookclass">
                        <Bookclass />
                    </Route>
                    <Route exact path="/bookpt">
                        <Bookpt />
                    </Route>
                    <Route exact path="/timetable">
                        <Timetable />
                    </Route>
                    <Route exact path="/onlineclass">
                        <Onlineclass />
                    </Route>
                    <Route exact path="/onlineclass">
                        <Onlineclass />
                    </Route>




                </Switch>
                <Sidebar
                    sidebarOpen={sidebarOpen}
                    closeSidebar={closeSidebar}

                />
            </Router>





        </div>
    );
};

export default Dashboard;