import './Main.css'
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import NavBar from '../components/navBar/NavBar';
import RightSideCom from '../components/Home/RightSideCom';


const Main = () => {
    return (
        <div>
            <NavBar />

            <div id='container' className='' >
                <div className='' >
                    <Outlet />
                </div>
                <div className=''>
                    <RightSideCom />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Main;