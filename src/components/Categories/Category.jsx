import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useGetProductsQuery} from "../../features/api/apiSlice";

import Products from "../Products/Products";
import {useSelector} from "react-redux";
import Button from "react-bootstrap/Button";

import cl from '../../styles/Category.module.scss';
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const Category = () => {
    const { id } = useParams();
    const { list } = useSelector(({categories}) => categories)

    const defaultValues = {
        title: "",
        price_min: 0,
        price_max: 0,
    }
    const defaultParams =  {
        categoryId : id,
        limit: 4,
        offset: 0,
        ...defaultValues,
    }


    const [isEnd, setEnd] = useState(false);
    const [cat, setCat] = useState(null);
    const [items, setItems] = useState([]);
    const [values, setValues] = useState(defaultValues);
    const [params, setParams] = useState(defaultParams);

    const { data = [], isLoading, isSuccess }  = useGetProductsQuery(params);

    useEffect(() => {
        if (!id) return;

        setValues(defaultValues);
        setItems([]);
        setEnd(false);
        setParams({ ...defaultParams, categoryId: id });
    }, [id])

    useEffect(() =>{
        if(!id || !list.length) return;

        const category = list.find((item) => item.id === id * 1)

        setCat(category)
    }, [id, list])

    useEffect(() => {
        if(isLoading || !data.length) return;

        setItems((_items) => [..._items, ...data])
    }, [data, isLoading])


    const handleChange = ({target: { value, name}}) => {
        setValues({...values, [name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setItems([]);
        setEnd(false);
        setParams({ ...defaultParams, ...values });
    };

    const handleReset = () => {
        setValues(defaultValues);
        setParams(defaultParams);
        setEnd(false);
    };

    return (
        <section className='wrapper'>
            <h2>{cat?.name}</h2>
            <form  onSubmit={handleSubmit}>
                <div className={cl.wrap}>
                    <InputGroup className="mb-3">
                        <Form.Control
                            type="text"
                            aria-label='title'
                            aria-describedby="basic-addon1"
                            name='title'
                            placeholder='Product name'
                            onChange={handleChange}
                            value={values.title}
                        />
                    </InputGroup>
                    <div className={cl.price}>
                        <div className={cl.title}>
                            Price
                        </div>
                        <div className={cl.row}>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    type="number"
                                    aria-label='price_min'
                                    aria-describedby="basic-addon1"
                                    name='price_min'
                                    placeholder='0'
                                    onChange={handleChange}
                                    value={values.price_min}
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    type="number"
                                    aria-label='price_min'
                                    aria-describedby="basic-addon1"
                                    name='price_max'
                                    placeholder='0'
                                    onChange={handleChange}
                                    value={values.price_max}
                                />
                            </InputGroup>
                        </div>
                    </div>
                </div>
                <button type='submits' hidden />
            </form>

            {isLoading ?
                (<div>Loading...</div>)
                : !isSuccess  || !items.length ? (
                    <div>
                        <span>no results</span>
                        <button onClick={handleReset}>Reset</button>
                    </div>
                ) : (
                    <Products title='' products={items}  amount={items.length}/>
                )
            }

            {!isEnd && (
                <div className={cl.btn}>
                    <Button variant="dark"
                            onClick={() => setParams({ ...params,
                                offset: params.offset + params.limit })}>
                        See more
                    </Button>
                </div>
            )}
        </section>
    )
}
export default Category;
