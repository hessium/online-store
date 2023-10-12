import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useGetProductsQuery} from "../../features/api/apiSlice";

import cl from "../../styles/Categories.module.scss";

import Products from "../Products/Products";
import {useSelector} from "react-redux";

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
        limit: 5,
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
            <form className={cl.filter} onSubmit={handleSubmit}>
                <div className={cl.row}>
                    <div>
                        <input type="text"
                               name='title'
                               placeholder='Product name'
                               onChange={handleChange}
                               value={values.title}
                        />
                    </div>
                    <div>
                        <input type="number"
                               name='price_min'
                               placeholder='0'
                               onChange={handleChange}
                               value={values.price_min}
                        />
                    </div>
                    <div>
                        <input type="number"
                               name='price_max'
                               placeholder='0'
                               onChange={handleChange}
                               value={values.price_max}
                        />
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
                    <Products title='' products={items} style={{padding: 0}} amount={items.length}/>
                )
            }

            {!isEnd && (
                <div className={cl.more}>
                    <button
                        onClick={() =>
                            setParams({ ...params, offset: params.offset + params.limit })
                        }
                    >
                        See more
                    </button>
                </div>
            )}
        </section>
    )
}
export default Category;
