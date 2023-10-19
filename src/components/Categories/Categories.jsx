import React from 'react'
import {Link} from "react-router-dom";

import PRODUCT from "../../styles/img/product.png";

import cl from "../../styles/Category.module.scss";

const Categories = ({ title,  products = [], amount }) => {

    const list = products;

    return (
        <section className={cl.wrapper}>
            {title && (<h2>{title}</h2>)}
          <div className={cl.list}>
              {list.map(({id,  name,}) =>(
                  <Link to={`/categories/${id}`} key={id} >
                      <div style={{backgroundImage:`url(${PRODUCT})`}} />
                      <div>{name}</div>
                  </Link>
              ))}
          </div>
        </section>
    )
}
export default Categories;
