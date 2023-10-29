import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {removeItemToCart} from "../../features/user/userSlice";

import cl from '../../styles/CartSmall.module.scss';
import {Link} from "react-router-dom";

const Cart = () => {
    const dispatch = useDispatch();
    const {cart} = useSelector(({user}) => user)

    const changeDelete = (id) => {
        dispatch(removeItemToCart(id))
    }

    return (
        <div >
            {cart.map((item) => {
                const { title,images,  price, id,} = item;
                return < Link to={`/products/${id}`} className={cl.cart} key={id} >
                                    <div className={cl.img} style={{backgroundImage:`url(${images[2]})`}}/>
                                    <div className={cl.body}>
                                        <div className={cl.name}>{title}</div>
                                        <div className={cl.content}>
                                            <div className={cl.price}>{price}$</div>
                                        </div>
                                    </div>
                                   <div className={cl.btn}>
                                       <button className={cl.delete} onClick={() => changeDelete({id})}>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                className="bi bi-trash" viewBox="0 0 16 16">
                                               <path
                                                   d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                                               <path
                                                   d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                                           </svg>
                                       </button>
                                   </div>
                                </Link>;
            })}
        </div>
    )
}
export default Cart;
