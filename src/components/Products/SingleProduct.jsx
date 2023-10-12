import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useGetProductQuery} from "../../features/api/apiSlice";
import {ROUTES} from "../../utils/routes";
import {useDispatch, useSelector} from "react-redux";

import Product from "./Product";
import Products from "./Products";
import {getRelatedProducts} from "../../features/products/productsSlice";


const SingleProduct = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { products: { related, list   } } = useSelector((state) => state );

    const {data, isLoading, isFetching, isSuccess} = useGetProductQuery({id});

    useEffect(() => {
        if(!isFetching && !isLoading && !isSuccess) {
            navigate(ROUTES.HOME)
        }
    }, [isLoading, isFetching, isSuccess, navigate])

    useEffect(() => {
        if(!data || !list.length) return;

        dispatch(getRelatedProducts(data.category.id));

    }, [data, list.length, dispatch])

    return !data ? (
            <section className="preloaded">Loading</section>) 
        : (
            < >
                <Product  {...data} key={data.id}/>
                <Products products={ related} amount={5} title="Related products" />
            </>

        )
}
export default SingleProduct