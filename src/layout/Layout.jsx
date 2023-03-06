import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../components/Molecules/Footer';
import Navbar from "../components/Molecules/Navbar/Navbar"

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}


export default Layout