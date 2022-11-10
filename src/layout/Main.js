
import React from 'react';
import { Outlet } from 'react-router-dom';
import Foot from '../components/common/Footer';
import Nav from '../components/common/Navbar';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Foot></Foot>
        </div>
    );
};

export default Main;