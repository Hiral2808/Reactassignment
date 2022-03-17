import React from 'react'
import { Link } from 'react-router-dom';
const FooterCom = () => {

  return (
    <div>
  

<footer class="text-center text-lg-start bg-light text-muted">
  <section
    class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >
  </section>
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        <img src='../images/logo.png'className='ml-0 mt-0 logo_left' height="30px" alt="logo"/>
          
          <h6 class="text-uppercase fw-bold mb-2 mt-3">
            Address:

          </h6>
          <p class="mb-2">28 White tower, Street Name New York City, USA</p>
          <h6 class="text-uppercase fw-bold mb-2">Telephone</h6>
          <p>
          +91 987 654 3210
          </p>
          <h6 class="text-uppercase fw-bold mb-2">Email</h6>
          <p>
          yourmain@gmail.com
          </p>
        </div>

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Menu
          </h6>
          <p>
          
            <Link to="/" style={{textDecoration:"none"}}>Home</Link>
          </p>
          <p>
            <Link to="/" class="text-reset" style={{textDecoration:"none"}}>About</Link>
          </p>
          <p>
            <Link to="/" class="text-reset" style={{textDecoration:"none"}}>Services</Link>
          </p>
          <p>
            <Link to="/" class="text-reset" style={{textDecoration:"none"}}>Testimonial</Link>
          </p>
          <p>
            <Link to="/" class="text-reset" style={{textDecoration:"none"}}>Blog</Link>
          </p>
          <p>
            <Link to="/" class="text-reset" style={{textDecoration:"none"}}>Contact</Link>
          </p>
        </div>
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Account
          </h6>
          <p>
            <Link to="/" class="text-reset" style={{textDecoration:"none"}}>Account</Link>
          </p>
          <p>
            <Link to="/" class="text-reset" style={{textDecoration:"none"}}>Checkout</Link>
          </p>
          <p>
            <Link to="/" class="text-reset" style={{textDecoration:"none"}}>Login</Link>
          </p>
          <p>
            <Link to="/" class="text-reset" style={{textDecoration:"none"}}>Register</Link>
          </p>
          <p>
            <Link to="/" class="text-reset" style={{textDecoration:"none"}}>Shopping</Link>
          </p>
          <p>
            <Link to="/" class="text-reset" style={{textDecoration:"none"}}>Widget</Link>
          </p>
        </div>
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
           Newsletter
          </h6>
          <p> Subscribe by our newsletter and get update protidin.</p>
          <input type="email" placeholder='Enter Your Mail' size="15" style={{height:"38px"}} ></input>
          <button class="btn btn-danger">Subscribe</button>
          <p>
            <i class="fas fa-envelope me-3"></i>
           
          </p>
          </div>
      </div>
    </div>
  </section>
  <div class="text-center p-4" style={{backgroundColor: "black",color:"white"}}>
    ©2021 All Rights Reserved By
    <a class="text-reset fw-bold" href="https://html.design/"> Free Html Templates</a>
  </div>
</footer>
    </div>
  )
}

export default FooterCom;
