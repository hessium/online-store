import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import { loginUser} from "../../features/user/userSlice";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';

import cl from '../../styles/Form.module.scss';

const UserLoginForm = ({hideForm, toggleCurrentFormType}) => {
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        email : "",
        password: "",
    });

    const handleChange = ({target : { value, name}}) => {
        setValues({...values, [name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const isNotEmpty = Object.values(values).every((val)=> !val);

        if(isNotEmpty) return;

        dispatch(loginUser(values))
        hideForm();
    }

    return (
        <div  className='popup'>
            <Button variant="dark" type="submit" onClick={hideForm}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path
                        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            </Button>

            <div className={cl.title}>Login</div>
            <form className={cl.form}  onSubmit={handleSubmit}>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <Form.Control
                        aria-label="email"
                        aria-describedby="basic-addon1"
                        type="email"
                        name="email"
                        placeholder="Your email"
                        value={values.email}
                        autoComplete="off"
                        onChange={handleChange}
                        required
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-lock" viewBox="0 0 16 16">
                            <path
                                d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                        </svg>
                    </InputGroup.Text>
                    <Form.Control
                        aria-label="password"
                        aria-describedby="basic-addon1"
                        type="password"
                        name="password"
                        placeholder="Your password"
                        value={values.password}
                        autoComplete="off"
                        onChange={handleChange}
                        required
                    />
                </InputGroup>

                <div className={cl.change} onClick={() => toggleCurrentFormType('signup')}>
                   Create an account
                </div>

                <Button variant="dark" type="submit">  Login an account</Button>
            </form>
        </div>
    )
}
export default UserLoginForm;
