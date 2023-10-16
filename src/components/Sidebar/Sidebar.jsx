import React from 'react';

import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

import cl from '../../styles/Header.module.scss';

const Sidebar = () => {
    const {list} = useSelector(({categories}) => categories)
    return (
        <aside >
            <h2 >Categories</h2>
            <nav className={cl.navigate}>
                <ul >
                    {list.map(({id, name}) => (
                        <li key={id}>
                            <NavLink
                                className={({ isActive }) =>
                                    `${cl.link} ${isActive ? cl.active : ""}`}
                                to={`/categories/${id}`}>
                                {name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className={cl.footer}>
                <a href='/help' target="_blank">Help</a>
                <a href='/terms'  target="_blank">Terms & Conditions</a>
            </div>
        </aside>
    )
}
export default Sidebar
