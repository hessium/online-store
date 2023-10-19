import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {useGetProductQuery} from "../../features/api/apiSlice";
import {getRelatedProducts} from "../../features/products/productsSlice";

import {ROUTES} from "../../utils/routes";

import Spinner from 'react-bootstrap/Spinner';
import Product from "./Product";
import Products from "./Products";

const SingleProduct = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const navigate = useNavigate();
    const { list, related } = useSelector(({ products }) => products);

    const {data, isLoading, isFetching, isSuccess} = useGetProductQuery({id});

    useEffect(() => {
        if(!isFetching && !isLoading && !isSuccess) {
            navigate(ROUTES.HOME)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading, isFetching, isSuccess])

    useEffect(() => {
        if(!data || !list.length) return;

        dispatch(getRelatedProducts(data.category.id));
    }, [data, dispatch, list.length]);

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
