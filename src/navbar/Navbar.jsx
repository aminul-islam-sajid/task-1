import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navOption = (
        <>
            <li className="justify-center ">
                <Link to="/">Home</Link>
            </li>
            <li className="justify-center ">
                <Link to="/menu">Our menu</Link>
            </li>
            <li className="justify-center ">
                <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="justify-center ">
                <Link to="/cart">
                    <button className="btn">
                        <Icon className="text-2xl" icon="mdi:cart" />
                        <div className="badge badge-secondary">+10</div>
                    </button>
                </Link>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navOption
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Test</a>
            </div>
            <div className="navbar-start hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOption}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;