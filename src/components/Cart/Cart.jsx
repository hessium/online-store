import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {sumBy} from "../../utils/common";
import {addItemToCart, removeItemToCart} from "../../features/user/userSlice";

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
        <section>
            <h2>Your cart</h2>

            {!cart.length ? (
                <div>Here is empty</div>
            ) :
                (
                 <>
                     <div >
                         {cart.map((item) => {
                             const { title,  price, id, quantity} = item;
                             return <div key={id} >
                                 <div >Картинка</div>
                                 <h2>{title}</h2>
                                 <div>{price}</div>
                                 <div>
                                     <div onClick={() => changeQuantity(item, Math.max(1, quantity - 1))}>
                                         -
                                     </div>
                                     <span>{quantity}</span>
                                     <div onClick={() => changeQuantity(item,  Math.max(1, quantity + 1))}>
                                         +
                                     </div>
                                 </div>
                                 <div>
                                     {price * quantity}
                                 </div>
                                 <div onClick={() => changeDelete({id})}>
                                     Удалить
                                 </div>
                             </div>;
                         })}
                     </div>
                     <div>
                         <div>
                             Total price
                         </div>

                         <span>
                            {sumBy(cart.map(({quantity, price}) => quantity * price))}$
                         </span>

                         <button>Proceed</button>
                     </div>
                 </>
                )}
        </section>
    )
}
export default Cart;
