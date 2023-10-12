import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {createUser} from "../../features/user/userSlice";

import  cl from '../../styles/User.module.scss';

const UserSignUpForm = ({hideForm, toggleCurrentFormType}) => {
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        email : "",
        name: "",
        password: "",
        avatar: "",
    });

    const handleChange = ({target : { value, name}}) => {
        setValues({...values, [name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const isNotEmpty = Object.values(values).every((val)=> !val);

        if(isNotEmpty) return;

        dispatch(createUser(values))
        hideForm();
    }

    return (
        <div className={cl.wrapper}>
            <div className={cl.close} onClick={hideForm}>
                <svg className={cl.icon}>
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#cancel`}></use>
                </svg>
            </div>

            <div className={cl.title}>Sign Up</div>
            <form className={cl.form} onSubmit={handleSubmit}>
                <div className={cl.group}></div>
                <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={values.email}
                    autoComplete="off"
                    onChange={handleChange}
                    required/>
                <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={values.name}
                    autoComplete="off"
                    onChange={handleChange}
                    required/>
                <input
                    type="password"
                    name="password"
                    placeholder="Your password"
                    value={values.password}
                    autoComplete="off"
                    onChange={handleChange}
                    required/>
                <input
                    type="text"
                    name="avatar"
                    placeholder="Your avatar"
                    value={values.avatar}
                    autoComplete="off"
                    onChange={handleChange}
                    required/>
                <div className={cl.link} onClick={() => toggleCurrentFormType('login')}>
                    I already have an account
                </div>
                <button type="submit"  className={cl.submit}>
                    Create an account
                </button>
            </form>
        </div>
    )
}
export default UserSignUpForm;
