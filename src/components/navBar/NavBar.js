import React from 'react';
import { useContext } from 'react';
import { FaUser } from "react-icons/fa"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/UserContext';
import { FaLaptopCode } from "react-icons/fa"

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)
    console.log(user)
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
                        <div className=" hidden lg:flex">
                            <ul className="menu menu-normal">
                                <li tabIndex={0}>
                                    <label tabIndex={0} className="btn btn-circle avatar ">
                                        <div className=" rounded-full">
                                            <img src="https://placeimg.com/80/80/people" />
                                        </div>
                                    </label>
                                    <ul className="">
                                        <li><a>{user?.displayName}</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                     
                    </div>
                </div>
                <div className="navbar-end">

                    <div className='mr-4'>
                        {
                            user?.uid ?
                                <>
                                    <button onClick={logOut}>Log Out</button>
                                    <p className='mx-4'>{user?.displayName}</p>
                                    <p className='mx-4'>{user?.photoURL ? <img src="user.photoURL"></img> : <FaUser />}</p>

                                </>
                                :
                                <>
                                    <Link className='mx-4' to='/login'>Login</Link>
                                    <Link to='/signup'>Sign Up</Link>
                                </>
                        }
                    </div>



                </div>
            </div>

        </div>


    );
};

export default NavBar;