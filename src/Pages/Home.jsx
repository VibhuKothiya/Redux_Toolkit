import React from 'react'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
      <h2 className='m-3'>Welcome to te Redux toolkit store</h2>
      <section>
        <Products />
      </section>
    </div>
  )
}

export default Home
