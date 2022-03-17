import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import FooterCom from './Footer/Footer'
import Carousel from './Navbar/Carousel/Carousel'
import NewArriavals from './NewArriavals/NewArriavals'
import Product from './Product/Product'
import Subscribe from './Subscribe/Subscribe'
import Testimonial from './Testimonial/Testimonial'
import Whyshop from './Whyshop/Whyshop'
 const Home = () => {
  return (
      <>
    <div>
        <Navbar/>
        <Carousel/>
        <Whyshop/>
        <NewArriavals/>
        <Product/>
        <Subscribe/>
        <Testimonial/>
        <FooterCom/>
    </div>
    </>
  )
}

export default Home;
