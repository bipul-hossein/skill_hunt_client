import React from 'react';
import { useContext } from 'react';
import { FaUser } from "react-icons/fa"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/UserContext';
import { FaLaptopCode } from "react-icons/fa"
import "./DarkMode.css"
const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)
    console.log(user)



    let clickedClass = "clicked";
    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme;

    if (localStorage) {
        theme = localStorage.getItem("theme");
    }

    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme);
    } else {
        body.classList.add(lightTheme);
    }

    const switchTheme = (e) => {
        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem("theme", "light");
            theme = lightTheme;
        } else {
            body.classList.replace(lightTheme, darkTheme);
            e.target.classList.add(clickedClass);
            localStorage.setItem("theme", "dark");
            theme = darkTheme;
        }
    };




    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/course'>Courses</Link></li>
                            <li><Link to='/fag'>FAQ</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/about'>About</Link></li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl"><FaLaptopCode className='text-3xl' /> SKILL HUNT</Link>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            <li><Link to='/course'>Courses</Link></li>
                            <li><Link to='/fag'>FAQ</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/about'>About</Link></li>


                        </ul>
                    </div>
                </div>
                <div className="navbar-end">

                    <div className='flex flex-row items-center mx-4'>
                        <div className='mr-2'>
                            {user?.photoURL ?

                                <div className="tooltip tooltip-secondary tooltip-left" data-tip={user?.displayName}>
                                    <img src={user?.photoURL} style={{ width: '30px' }} className=" rounded-full" />
                                </div>

                                : <FaUser></FaUser>}
                        </div>

                        <div className=''>
                            {
                                user?.uid ?
                                    <button onClick={logOut}>Log Out</button>
                                    :
                                    <Link className='mx-4' to='/login'>Login</Link>

                            }
                        </div>
                    </div>

                    <div className='hidden md:inline' >
                        <button
                            className={theme === "dark" ? clickedClass : ""}
                            id="darkMode"
                            onClick={(e) => switchTheme(e)}
                        ></button>
                    </div>

                </div>
            </div>

        </div>


    );
};

export default NavBar;