import React, {useEffect, useState} from 'react'
import { updateUser} from "../../features/user/userSlice";
import {useDispatch, useSelector} from "react-redux";

import cl from '../../styles/Profile.module.scss';

const Profile = () => {
    const {currentUser} = useSelector(({user}) => user)
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        email : "",
        name: "",
        password: "",
        avatar: "",
    });

    useEffect(() => {
        if(!currentUser) return

        setValues(currentUser)
    }, [currentUser])

    const handleChange = ({target : { value, name}}) => {
        setValues({...values, [name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const isNotEmpty = Object.values(values).every((val)=> !val);

        if(isNotEmpty) return;

        dispatch(updateUser(values))
    }

    return (
        <section className={cl.profile}>
            {!currentUser ? <span>You need log in</span> : (
                <form className={cl.form} onSubmit={handleSubmit}>
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

                    <button type="submit">
                        Update
                    </button>
                </form>
            )}
        </section>
    )
}
export default Profile
