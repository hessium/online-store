import React from 'react'
import {Link} from "react-router-dom";

import cl from "../../styles/Categories.module.scss";
import PRODUCT from "../../styles/img/product.png";


const Categories = ({ title, style = {}, products = [], amount }) => {

    const list = products;

    return (
        <section className={cl.section} style={style}>
            {title && (<h2>{title}</h2>)}
          <div className={cl.list}>
              {list.map(({id, image, name,}) =>(
                  <Link to={`/categories/${id}`} key={id} className={cl.item}>
                      <div className={cl.img} style={{backgroundImage:`url(${PRODUCT})`}} />
                      <div className={cl.title}>{name}</div>
                  </Link>
              ))}
          </div>
        </section>
    )
}
export default Categories;
