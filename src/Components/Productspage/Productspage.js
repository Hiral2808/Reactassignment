import React from 'react'
import Navbar from '../Navbar/Navbar'
import '../About/About.css'
import Product from '../Product/Product'
import Footer2 from '../Footer2/Footer2'
const Productspage = () => {
  return (
      <>
    <div>
        <Navbar/>
        <div className='abouts'>
            Product Grid
        </div>
        <Product/>
        <Footer2/>
    </div>
    </>
  )
}

export default Productspage