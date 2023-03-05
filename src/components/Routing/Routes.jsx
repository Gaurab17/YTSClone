import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../Molecules/Navbar";

const RoutingLayout = () => {
    return (
        <Router>
            <div className="container-wrapper">
                <Navbar />
            </div>
        </Router>
    );
}

export default RoutingLayout