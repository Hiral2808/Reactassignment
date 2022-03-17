import React from 'react'
import './Subscribe.css'

 const Subscribe = () => {
  return (
      <>
    <div className='bg'>
        <div className='mt-4' style={{fontWeight:'bold'}}>
        <h1>Subscribe To Get Discount Offers</h1>
        </div>
        <div className="mt-4 ">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                      
        </div>
        <div className='mt-4' >
            <input type="text" size="43" placeholder='Enter Your Email'></input>
        </div>
        <div className='mt-4 '>
            <button className='subscbtn'>Subscribe</button>
        </div>
    </div>
    </>
    
  )
}

export default Subscribe;
