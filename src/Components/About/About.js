import React from 'react'
import Footer2 from '../Footer2/Footer2';
import Navbar from '../Navbar/Navbar';
import NewArriavals from '../NewArriavals/NewArriavals';
import Whyshop from '../Whyshop/Whyshop';
import './About.css'

 const About = () => {
  return (
      <>
    <div>
        <Navbar/>
        <div className='abouts'>About us</div>
        <Whyshop/>
        <NewArriavals/>
        <Footer2/>

    </div>
    </>
  )
}
export default About;
