import React from "react";
import { useState } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import './styles/Component.scss';
import { Color } from "../values/Colors";

const NavBar = () => {
    const dark = Color.dark;
    const light = Color.light;
    const primary = Color.primary;

    const menu =  [
        {id: 1, text: 'Beranda', link: '/'},
        {id: 2, text: 'Resep', link: '/Resep'},
        {id: 3, text: 'Lokasi', link: '/Lokasi'},
        {id: 4, text: 'Komunitas', link: '/Komunitas'},
    ];

    const [isOpen, setIsOpen] = useState(true);
    
    const open = () => {
        setIsOpen(!isOpen)
    }

    const toogleOpen = () => {
        $(document).ready(() => {
            open();
        })
    }
    

    return (
        <nav className="z-50 fixed top-0 w-screen" style={{backgroundColor: dark}}>
            <div className="flex items-center justify-between px-4 lg:px-0 py-4 md:mx-20">
                <div className="text-white font-bold text-2xl">Kerak Telor</div>
                <div className="hidden w-full md:flex md:items-center md:w-auto">
                    <ul className="hidden md:flex items-center space-x-4">
                        {menu.map((comp) => (
                            <li key = {comp.id}>
                                <Link
                                to={comp.link}
                                className="navbar-items active:font-bold"
                                >
                                {comp.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex md:hidden fill-white">
                    <button onClick={toogleOpen} >
                        <svg
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        >
                        {isOpen ? (
                             <path
                             fillRule="evenodd"
                             d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                             />
                        ) : (
                            <path
                            fillRule="evenodd"
                            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                            />
                        )}
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`md:hidden pb-3 ${isOpen? "hidden": "block"}`} style={{backgroundColor: dark}}>
                <ul className="">
                    {menu.map((comp) => (
                        <li className="py-1" key = {comp.id}>
                            <Link onClick={toogleOpen}
                            to={comp.link}
                            className="navbar-items active:font-bold"
                            >
                            {comp.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;

