import React from 'react'
import {Link, NavLink} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

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
                            <Card.Img variant="top" src={images[2]} />
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    <NavLink
                                        to={`/categories/${id}`}>
                                        {cat}
                                    </NavLink>
                                    <div className='price'>
                                        <div>{price}$</div>
                                        <div>{Math.floor(price * 1.2)}$</div>
                                    </div>
                                    <div>{Math.floor(Math.random() * 20 + 1)} purchased</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default Products
