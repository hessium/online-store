import React from 'react'
import {Link} from "react-router-dom";

import Card from 'react-bootstrap/Card';
import noPhoto from '../../styles/img/card/no-photo.jpg';
import cl from '../../styles/Product.module.scss';

const Products = ({ title, style = {}, products = [], amount }) => {
    const list = products.filter((_, i) => i < amount);



    return (
        <div  style={style}>
            {title && (<h2>{title}</h2>)}
            <div className={cl.list}>
                {list.map(({ id, images, title, category: { name: cat }, price }) =>(

                    <Link className={cl.product} to={`/products/${id}`} key={id}>
                        <Card>
                            <Card.Img variant="top" src={
                                !images[2] ? noPhoto : images[2]} />
                            <Card.Body>
                                <div className={cl.name}>
                                    <Card.Title>{title}</Card.Title>
                                </div>
                                <div
                                    className={cl.category}
                                 >
                                    {cat}
                                </div>
                                <div className={cl.price}>
                                    <div className={cl.current}>{price}$</div>
                                    <div className={cl.old}>{Math.floor(price * 1.2)}$</div>
                                </div>
                                <div>{Math.floor(Math.random() * 20 + 1)} purchased</div>
                            </Card.Body>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default Products
