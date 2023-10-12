import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import {ROUTES} from "../../utils/routes";
import {useDispatch, useSelector} from "react-redux";

import cl from '../../styles/Header.module.scss';
import AVATAR from '../../styles/img/avatar.svg';
import LOGO from '../../styles/img/logo.svg';

import {toggleForm} from "../../features/user/userSlice";
import {useGetProductsQuery} from "../../features/api/apiSlice";


const Header = () => {
    const dispatch = useDispatch();
    const {currentUser} = useSelector(({user}) => user);

    const navigate = useNavigate();

    const [searchValues, setSearchValues] = useState('');
    const [values, setValues] = useState({name : "Guest", avatar : AVATAR});

    useEffect(() => {
        if(!currentUser) return

        setValues(currentUser)
    }, [currentUser]);

    const {data, isLoading} = useGetProductsQuery({title: searchValues});

    const handleSearch = ({target: { value}}) => {
           setSearchValues(value);
    }

    const handleClick = () => {
        if(!currentUser) dispatch(toggleForm(true))
        else navigate(ROUTES.PROFILE)
    };

    return (
        <header className={cl.header}>
            <div className={cl.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={LOGO} alt="stuff" />
                </Link>
            </div>
            <div className={cl.info}>
                <div className={cl.user} onClick={handleClick}>
                    <div className={cl.avatar}
                         style={{ backgroundImage: `url(${values.avatar})` }}>
                    </div>
                    <div className={cl.username}>{values.name}</div>
                </div>

            </div>
            <form className={cl.form}>
                <div className={cl.input}>
                    <input type="search"
                           name='search'
                           placeholder='Search'
                           autoComplete='off'
                           onChange={handleSearch}
                           value={searchValues}
                    />
                </div>
                {searchValues && <div className={cl.box}>
                        {isLoading ? "Loading" : !data.length ? 'No results' : (
                            data.map(({title,  id}) => {
                                return (
                                    <Link
                                        key={id}
                                        onClick={() => setSearchValues('')}
                                        to={`/products/${id}`}>
                                        <div>{title}</div>
                                    </Link>
                                )
                            })
                        )}
                    </div>}
            </form>
            <div className={cl.account}>
                <Link to={ROUTES.HOME} className={cl.favourites}>
                    <svg className={cl.icon_fav}>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#fav`}></use>
                    </svg>
                </Link>

                <Link to={ROUTES.CART} className={cl.cart}>
                    <svg className={cl.icon_cart}>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#basket`}></use>
                    </svg>
                    <span className={cl.count}>2</span>
                </Link>
            </div>
        </header>
    )
}
export default Header;
