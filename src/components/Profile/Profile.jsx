import React, {useEffect, useState} from 'react'
import { updateUser} from "../../features/user/userSlice";
import {useDispatch, useSelector} from "react-redux";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

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
        <section className='wrapper'>
            {!currentUser ? <span>You need log in</span> : (
                <form onSubmit={handleSubmit}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-lock" viewBox="0 0 16 16">
                                <path
                                    d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                            </svg>
                        </InputGroup.Text>
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
                            aria-label="name"
                            aria-describedby="basic-addon1"
                            type="text"
                            name="name"
                            placeholder="Your name"
                            value={values.name}
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
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-lock" viewBox="0 0 16 16">
                                <path
                                    d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                            </svg>
                        </InputGroup.Text>
                        <Form.Control
                            aria-label="avatar"
                            aria-describedby="basic-addon1"
                            type="text"
                            name="avatar"
                            placeholder="Your avatar"
                            value={values.avatar}
                            autoComplete="off"
                            onChange={handleChange}
                            required
                        />
                    </InputGroup>
                    <button type="submit">
                        Update
                    </button>
                </form>
            )}
        </section>
    )
}
export default Profile
