import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'

const Cart = () => {
  const product = useSelector((state) => state.cart)

  const dispatch = useDispatch()
  const handleRemove = (id) => {
    dispatch(remove(id))
  }


  return (
    <div>
      <h1>Shopping Cart</h1>

      <div className="row">
        {
          product.map((val) => {
            return (
              <>
                <div className="col-md-3">
                  <div class="card" style={{ width: '19rem', height: '100%' }}>
                    <img src={val.image} class="card-img-top" alt="..." style={{ height: '300px' }} />
                    <div class="card-body">
                      <h5 class="card-title">{val.title}</h5>
                      <p class="card-text">{val.price}</p>
                      <button onClick={() => handleRemove(val.id)}>Remove</button>
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default Cart
