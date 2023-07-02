import React from "react";
import { Link } from "react-router-dom";
import './styles/Component.scss';
import { Color } from "../values/Colors";

const NavBar = () => {
    const color = Color.dark;

    const menu =  [
        {id: 1, text: 'Beranda', link: '/'},
        {id: 2, text: 'Resep', link: '/Resep'},
        {id: 3, text: 'Lokasi', link: '/Lokasi'},
        {id: 4, text: 'Komunitas', link: '/Komunitas'},
    ];
    return (
        <nav style={{backgroundColor: color}}>
            <div className="flex items-center justify-between px-1 py-4 md:mx-20 sticky top-0">
                <div className="text-white font-bold text-2xl">Kerak Telor</div>
                <div>
                    <ul className="flex items-center space-x-4">
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
            </div>
        </nav>
    )
}
export default NavBar