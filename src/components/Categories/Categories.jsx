import React from 'react'
import {Link} from "react-router-dom";

import PRODUCT from "../../styles/img/product.png";


const Categories = ({ title, style = {}, products = [], amount }) => {

    const list = products;

    return (
        <section style={style}>
            {title && (<h2>{title}</h2>)}
          <div >
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
