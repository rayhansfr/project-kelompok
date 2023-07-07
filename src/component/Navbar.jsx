import React, { Component } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const menu =  [
        {id: 1, text: 'Home', link: '/'},
        {id: 2, text: 'Recipe', link: '/Recipe'},
        {id: 3, text: 'Place', link: '/Place'},
        {id: 4, text: 'Community', link: '/Community'},
    ];
    return (
        <nav className="bg-[#38b000] mb-4">
            <div className="flex items-center justify-between px-2 py-4 mx-20">
                <div className="text-white font-bold text-2xl">Kerak Telor</div>
                <div>
                    <ul className="flex items-center space-x-4">
                        {menu.map((comp) => (
                            <li key = {comp.id}>
                                <Link
                                to={comp.link}
                                className="text-white hover:underline transition-transform duration-300"
                                >
                                {comp.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default NavBar