import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice'
import { getData } from '../store/productSlice'

const Products = () => {
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('Name');

    //Add to Cart function
    
    const dispatch = useDispatch();
    // const [products, setProducts] = useState([]);
    const { data: products, status } = useSelector((state) => state.product);

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

    //Data - Sorting   

    const handleSearchData = (e) => {
        setSearch(e.target.value);
    };


    const handleSortby = (e) => {
        setSortBy(e.target.value);
    };


    //  Display Shorted Products
    const sortedProducts = [...products].sort((a, b) => {
        if (sortBy === 'price') {
            return a.price - b.price;
        } else if (sortBy === 'name') {
            return a.title.localeCompare(b.title);
        }
        return 0;
    });

    //  Result of Filter products
    const filteredProducts = sortedProducts.filter(product =>
        product.price.toString().includes(search) || product.title.toLowerCase().includes(search.toLowerCase())

    );

    return (

        <>
            {/* Data-searching by name or price */}

            <div className='text-center m-3'>
                <input className='m-2'
                    type="text"
                    value={search}
                    onChange={handleSearchData}
                    placeholder="Search product"
                />
                <select onChange={handleSortby} value={sortBy} >
                    <option value="name">Sort by Name</option>
                    <option value="price">Sort by Price</option>
                </select>
            </div>

            {/* Render-Products */}
            <div className='row' style={{ rowGap: '5px' }}>
                {
                    filteredProducts.map((val, ind) => {
                        return (
                            <>
                                <div className="col-md-3">
                                    <div class="card p-2" style={{ width: '19rem', height: '100%' }}>
                                        <img src={val.image} class="card-img-top" alt="..." style={{ height: '300px' }} />
                                        <div class="card-body">
                                            <h5 class="card-title">{val.title}</h5>
                                            <p class="card-text">${val.price}</p>
                                            <button onClick={() => { handleAdd(val) }}>Add to Cart</button>
                                        </div>
                                    </div>
                                </div></>
                        )
                    })
                }
            </div>
        </>
    )
}


export default Products
