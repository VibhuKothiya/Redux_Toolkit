import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice'
import { getData } from '../store/productSlice'

const Products = () => {
    const dispatch = useDispatch();
    // const [products, setProducts] = useState([]);
    const {data : products, status} = useSelector((state) => state.product)

    useEffect(() => {
        dispatch(getData())
        // const fetchData = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     console.log(data);
        //     setProducts(data)
        // }

        // fetchData();
    }, [])

    const handleAdd = (val) => {
        dispatch(add(val));
    }

    return (

        <div className='row'>

            {
                products.map((val, ind) => {
                    return (
                        <>
                            <div className="col-md-3">
                                <div class="card" style={{ width: '19rem', height: '100%' }}>
                                    <img src={val.image} class="card-img-top" alt="..." style={{ height: '300px' }} />
                                    <div class="card-body">
                                        <h5 class="card-title">{val.title}</h5>
                                        <p class="card-text">{val.price}</p>
                                        <button onClick={() => { handleAdd(val) }}>Add to Cart</button>
                                    </div>
                                </div>
                            </div></>
                    )
                })
            }
        </div>
    )
}

export default Products
