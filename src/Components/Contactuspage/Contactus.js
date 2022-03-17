import React from "react";
import Navbar from "../Navbar/Navbar";
import "../About/About.css";
import NewArriavals from "../NewArriavals/NewArriavals";
import Footer2 from "../Footer2/Footer2";
const Contactus = () => {
  return (
      <>
    <div>
      <Navbar />
      <div className="abouts">Contact us</div>
      <div className="container my-5">
          <form class="form-control-lg">
              <div class="form-group mt-3 mb-3 ">
              <input  class="form-control form-control-lg" placeholder="Enter Your Full Name " name="fullname"></input>
              </div>
              <div class="form-group mt-3 mb-3">
              <input type="email" placeholder="Enter Your Email " class="form-control" name="email"></input>
              
              </div>
              <div class="form-group mt-3 mb-3">
              <input  placeholder="Enter Subject " class="form-control" name="subject"></input>
              
              </div>
              <div class="form-group mt-3 mb-3">
              <input  placeholder="Enter Your Message " class="form-control" name="message"></input>
              
              </div>
              <div>
                  <button class="btn btn-dark">Submit</button>
              </div>
          </form>
      </div>

        <NewArriavals/>
        <Footer2/>      
    </div>
    </>
  );
};

export default Contactus;
