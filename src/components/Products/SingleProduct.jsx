import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useGetProductQuery} from "../../features/api/apiSlice";
import {ROUTES} from "../../utils/routes";
import {useDispatch, useSelector} from "react-redux";

import Product from "./Product";
import Products from "./Products";
import {getRelatedProducts} from "../../features/products/productsSlice";

import Spinner from 'react-bootstrap/Spinner';

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
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
        : (
            < >
                <Product  {...data} />
                <Products products={ related} amount={10} title="Related products" />
            </>

        )
}
export default SingleProduct
