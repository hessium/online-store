import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/routes";
import {useDispatch} from "react-redux";

import cl from "../../styles/Product.module.scss";
import IMG from '../../styles/img/card/img.png';
import AVATAR from '../../styles/img/avatar.svg'
import BANNER from '../../styles/img/banner.png'
import {addItemToCart} from "../../features/user/userSlice";


const colors = ['Red', 'Green', 'Blue', 'White'];
const sizes = ['55', '66', '77', '88'];


const Product = (item) => {
    const { title, price, description, images} = item;
    const imagesArray = [images[2], AVATAR, BANNER, IMG];
    const dispatch = useDispatch();

    const [currentImages, setCurrentsImages] = useState(images[2]);
    const [currentSize, setCurrentSize] = useState();
    const [currentColor, setCurrentColor] = useState();

    useEffect(() => {
        if (!images.length) return;

        setCurrentsImages(images[2]);
    }, [images]);

    const addToCart = () => {
        dispatch(addItemToCart(item))
    }

    return (
        <section  className={cl.product} >
            <div className={cl.images}>
                <div className={cl.img} style={{backgroundImage:`url(${currentImages})`}} />
                <div className={cl['images-list']}>
                    {imagesArray.map((img) =>
                        <div
                            onClick={() => setCurrentsImages(img)}
                            className={cl.small}
                            style={{backgroundImage:`url(${img})`}}></div>
                    )}
                </div>
            </div>
            <div className={cl.info}>
                <div className={cl.title}>{title}</div>
                <div className={cl.price}>{price}$</div>
                <div className={cl['property__list']}>
                    <span className={cl['property__name']}>Color :</span>
                    {colors.map((color) =>
                        <div  className={`${cl['property__item']} ${
                            currentColor === color ? cl.active : ""
                        }`}
                             onClick={() => setCurrentColor(color)}>
                            {color}
                        </div>
                    )}
                </div>
                <div className={cl['property__list']}>
                    <span className={cl['property__name']}>Size :</span>
                    {sizes.map((size) =>
                        <div key={size}
                             className={`${cl['property__item']} ${
                                 currentSize === size ? cl.active : ""
                             }`}
                             onClick={() => setCurrentSize(size)}>
                            {size}
                        </div>
                    )}
                </div>
                <p className={cl.description}>{description}</p>

                <div className={cl.actions}>
                    <button
                        className={cl.add}
                        onClick={addToCart}
                        disabled={!currentSize}>
                        Add to cart
                    </button>
                    <button className={cl.favourite}>
                        Add to favorite
                    </button>
                </div>
                <div className={cl.bottom}>
                    <div className="">
                        19 people purchased
                    </div>
                    <Link to={ROUTES.HOME}>
                        Find in a store
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default Product
