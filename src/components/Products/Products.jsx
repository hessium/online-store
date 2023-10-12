import React from 'react'
import {Link} from "react-router-dom";

import cl from "../../styles/Products.module.scss";

import PRODUCT from "../../styles/img/product.png";

const Products = ({ title, style = {}, products = [], amount }) => {
    const list = products.filter((_, i) => i < amount);

    return (
        <section className={cl.products} style={style}>
            {title && (<h2>{title}</h2>)}
            <div className={cl.list}>
                {list.map(({ id, images, title, category: { name: cat }, price }) =>(
                    <Link to={`/products/${id}`} key={id} className={cl.product}>
                        <div className={cl.img} style={{backgroundImage:`url(${images[2]})`}}></div>
                        <div className={cl.wrapper}>
                           <div className={cl.header}>
                               <div className={cl.title}>{title}</div>
                               <div className={cl.category}>{cat}</div>
                           </div>
                            <div className={cl.info}>
                                <div className={cl.prices}>
                                    <div className={cl.price}>{price}$</div>
                                    <div className={cl.priceOld}>{Math.floor(price * 1.2)}$</div>
                                </div>
                                <div className={cl.purchases}>{Math.floor(Math.random() * 20 + 1)} purchased</div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}
export default Products
