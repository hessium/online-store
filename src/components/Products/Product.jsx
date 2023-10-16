import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/routes";
import {useDispatch} from "react-redux";

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
        <section  >
            <div >
                <div  style={{backgroundImage:`url(${currentImages})`}} />
                <div >
                    {imagesArray.map((img) =>
                        <div
                            onClick={() => setCurrentsImages(img)}
                            style={{backgroundImage:`url(${img})`}}></div>
                    )}
                </div>
            </div>
            <div >
                <div >{title}</div>
                <div >{price}$</div>
                <div >
                    <span>Color :</span>
                    {colors.map((color) =>
                        <div  className={`${['property__item']} ${
                            currentColor === color ? 'active' : ""
                        }`}
                             onClick={() => setCurrentColor(color)}>
                            {color}
                        </div>
                    )}
                </div>
                <div >
                    <span >Size :</span>
                    {sizes.map((size) =>
                        <div key={size}
                             className={`${['property__item']} ${
                                 currentSize === size ? 'active' : ""
                             }`}
                             onClick={() => setCurrentSize(size)}>
                            {size}
                        </div>
                    )}
                </div>
                <p>{description}</p>

                <div >
                    <button

                        onClick={addToCart}
                        disabled={!currentSize}>
                        Add to cart
                    </button>
                    <button >
                        Add to favorite
                    </button>
                </div>
                <div >
                    <div >
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
