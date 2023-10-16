import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import {ROUTES} from "../../utils/routes";
import {useDispatch, useSelector} from "react-redux";

import AVATAR from '../../styles/img/avatar.svg';
import LOGO from '../../styles/img/logo.svg';

import {toggleForm} from "../../features/user/userSlice";
import {useGetProductsQuery} from "../../features/api/apiSlice";

import cl from '../../styles/Header.module.scss';
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const Header = () => {
    const dispatch = useDispatch();
    const {currentUser, cart} = useSelector(({user}) => user);

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
            <div className="container">
                <Link className={cl.logo} to={ROUTES.HOME}>
                    <img src={LOGO} alt="stuff" />
                </Link>
                <div className={cl.user} onClick={handleClick}>
                    <div className={cl.user__avatar} style={{ backgroundImage: `url(${values.avatar})`}}></div>
                    <div className={cl.user__name}>{values.name}</div>
                </div>
                <form className={cl.form}>
                    <InputGroup >
                        <Form.Control
                            aria-label="search"
                            aria-describedby="basic-addon1"
                            type="search"
                            name='search'
                            placeholder='Search'
                            autoComplete='off'
                            onChange={handleSearch}
                            value={searchValues}
                        />
                    </InputGroup>
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
                <Link className={cl.link} to={ROUTES.CART} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                         className="bi bi-bag" viewBox="0 0 16 16">
                        <path
                            d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                    </svg>
                    {!!cart.length && (<span className={cl.quantity}>{cart.length}</span>)}
                </Link>
            </div>
        </header>
    )
}
export default Header;
