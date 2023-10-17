import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import Categories from "../Categories/Categories";
import {filterByPrice} from "../../features/products/productsSlice";

const Home = () => {
    const { products: {list, filtered}, categories  } = useSelector((state) => state );

    const dispatch = useDispatch();

    useEffect(() => {
        if(!list.length) return

        dispatch(filterByPrice(100))
    }, [dispatch, list.length])

    return (
        <>
            <Poster />
            <Products products={ list } amount={4} title="Trending" />
            <Categories products={ categories.list } amount={4} title="Worth seeing" />
            <Products products={ filtered } amount={4} title="Less than 100$" />
        </>
    );
};

export default Home;