import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-slate-800  border-b border-slate-800 shadow-md px-5  lg:px-28 py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-white text-6xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3  shadow  rounded-box w-52 flex flex-col gap-5 bg-slate-800 text-white p-5">
                        <NavLink
                            to="/home"
                            className={({ isActive }) =>
                                isActive ? 'text-blue-color border-b-2 border-logo-color' : undefined
                            }
                        >Home</NavLink>
                        <NavLink
                            to="/news"
                            className={({ isActive }) =>
                                isActive ? 'text-blue-color border-b-2 border-logo-color' : undefined
                            }
                        >News</NavLink>

                        <NavLink to='/blog' className={({ isActive }) =>
                            isActive ? 'text-blue-color border-b-2 border-logo-color' : undefined
                        } >Blog</NavLink>

                        <NavLink to='/contact' className={({ isActive }) =>
                            isActive ? 'text-blue-color border-b-2 border-logo-color' : undefined
                        }>Contact</NavLink>
                        <Link to='/login' className='lg:pl-8  pl-0'><button className="btn btn-outline btn-success">Login</button></Link>
                    </ul>

                </div>
                <Link to="/" className="btn btn-ghost normal-case text-3xl  lg:text-4xl text-white font-bold ">
                    Intern Opportunity</Link>
            </div>
            <div className=" navbar-center hidden lg:flex h-16 w-16 ">
                {/*  <FontAwesomeIcon icon={faBurger} /> */}
                {/*  <img src={logo} alt="" /> */}

            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal  text-slate-100 gap-10 text-lg ">
                    <NavLink
                        to="/home"
                        className={({ isActive }) =>
                            isActive ? 'text-blue-color border-b-2 border-logo-color' : undefined
                        }
                    >Home</NavLink>
                    <NavLink
                        to="/news"
                        className={({ isActive }) =>
                            isActive ? 'text-blue-color border-b-2 border-logo-color' : undefined
                        }
                    >News</NavLink>

                    <NavLink to='/blog' className={({ isActive }) =>
                        isActive ? 'text-blue-color border-b-2 border-logo-color' : undefined
                    } >Blog</NavLink>

                    <NavLink to='/contact' className={({ isActive }) =>
                        isActive ? 'text-blue-color border-b-2 border-logo-color' : undefined
                    }>Contact</NavLink>
                </ul>
                <Link to='/login' className='pl-8'><button className="btn btn- btn-success">Login</button></Link>
            </div>
        </div>
    );
};

export default Header;