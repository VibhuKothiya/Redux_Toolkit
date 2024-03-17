import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const Navbar = () => {
    const items = useSelector((state) => state.cart)

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand " href="#"><img src='https://seeklogo.com/images/N/new-products-logo-05BF99EDD2-seeklogo.com.gif' style={{width:'60px'}}/></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to='/' class="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/Cart' class="nav-link active" aria-current="page">Cart</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/About' class="nav-link active" aria-current="page">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/Contact' class="nav-link active" aria-current="page">Contact</Link>
                        </li>
                    </ul>
                    <span className='cart-num position-relative' ><AddShoppingCartIcon style={{ color: '#fffff' }} /> <span className='position-absolute top-0 start-100 translate-middle'>{items.length}</span></span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
