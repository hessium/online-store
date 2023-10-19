import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {addItemToCart, removeItemToCart} from "../../features/user/userSlice";
import {sumBy} from "../../utils/common";

import Button from "react-bootstrap/Button";

import cl from '../../styles/Cart.module.scss';

const Cart = () => {
    const dispatch = useDispatch();
    const {cart} = useSelector(({user}) => user)


    const changeQuantity = (item, quantity) => {
      dispatch(addItemToCart({...item, quantity}))
    }

    const changeDelete = (id) => {
        dispatch(removeItemToCart(id))
    }

    return (
        <section className='wrapper'>
            <h2>Your cart</h2>

            {!cart.length ? (
                <div>Here is empty</div>
            ) :
                (
                 <>
                     <div >
                         {cart.map((item) => {
                             const { title,images,  price, id, quantity} = item;
                             return <div className={cl.cart} key={id} >
                                 <div className={cl.img} style={{backgroundImage:`url(${images[2]})`}}/>
                                 <div className={cl.body}>
                                     <div className={cl.name}>{title}</div>
                                     <div className={cl.content}>
                                         <div className={cl.price}>{price}$</div>
                                         <div className={cl.quantity}>
                                             <div className={cl.btn} onClick={() => changeQuantity(item, Math.max(1, quantity - 1))}>
                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                      fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
                                                     <path fillRule="evenodd"
                                                           d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                                                 </svg>
                                             </div>
                                             <span>{quantity}</span>
                                             <div className={cl.btn} onClick={() => changeQuantity(item,  Math.max(1, quantity + 1))}>
                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                      fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                                     <path
                                                         d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                                 </svg>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                 <Button variant="dark" onClick={() => changeDelete({id})}>
                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                          className="bi bi-trash" viewBox="0 0 16 16">
                                         <path
                                             d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                                         <path
                                             d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                                     </svg>
                                 </Button>
                             </div>;
                         })}
                     </div>
                     <div className={cl.footer}>
                       <div className={cl.total}>
                           <div className={cl.text}>
                               Total price:
                           </div>

                           <span>
                            {sumBy(cart.map(({quantity, price}) => quantity * price))}$
                         </span>
                       </div>

                         <Button variant="dark">Proceed</Button>
                     </div>
                 </>
                )}
        </section>
    )
}
export default Cart;
