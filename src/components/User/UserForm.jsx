import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import UserSignUpForm from "./UserSignUpForm";
import {toggleForm, toggleFormType} from "../../features/user/userSlice";
import UserLoginForm from "./UserLoginForm";


const UserForm = () => {
    const dispatch = useDispatch();
    const { showForm, formType } = useSelector(({user}) => user);


    const hideForm = () => {
        dispatch(toggleForm(false))
    }

    const toggleCurrentFormType   = (type) => {
        dispatch( toggleFormType(type))
    }

    return showForm ? (
                <>
                    <div className='overlay' onClick={hideForm} />
                    {formType === 'signup' ?
                        (<UserSignUpForm  hideForm={hideForm}  toggleCurrentFormType={toggleCurrentFormType}/>)
                        : (<UserLoginForm  hideForm={hideForm}  toggleCurrentFormType={toggleCurrentFormType}/>)
                    }
                </>)
        :
        (
            <></>
    );
};
export default UserForm;
