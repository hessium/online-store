import React from 'react';

import cl from '../../styles/Sidebar.module.scss';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Sidebar = () => {
    const {list} = useSelector(({categories}) => categories)
    return (
        <aside className={cl.sidebar}>
            <h2 className={cl.title}>Categories</h2>
            <nav>
                <ul className={cl.menu}>
                    {list.map(({id, name}) => (
                        <li key={id}>
                            <NavLink
                                className={({ isActive}) =>
                                    `${cl.link} ${isActive ? cl.active : ""}`}
                                to={`/categories/${id}`}>
                                {name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className={cl.footer}>
                <a href='/help' className={cl.link} target="_blank">Help</a>
                <a href='/terms' className={cl.link} target="_blank">Terms & Conditions</a>
            </div>
        </aside>
    )
}
export default Sidebar
