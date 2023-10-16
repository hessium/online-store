import React from 'react'
import {Link, NavLink} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import cl from '../../styles/Product.module.scss';

const Products = ({ title, style = {}, products = [], amount }) => {
    const list = products.filter((_, i) => i < amount);

    return (
        <Container  style={style}>
            {title && (<h2>{title}</h2>)}
            <Row >
                {list.map(({ id, images, title, category: { name: cat }, price }) =>(
                    <Col className='col' xs={6} md={3}>
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
                    </Col>
                  ))}
            </Row>
        </Container>
    )
}
export default Products
