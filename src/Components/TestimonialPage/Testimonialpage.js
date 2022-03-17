import React from "react";
import "./Testomonialpage.css";
import Navbar from "../Navbar/Navbar";
import Testimonial from "../Testimonial/Testimonial";
import Footer2 from "../Footer2/Footer2";

const Testimonialpage = () => {
  return (
      <>
    <div>
      <Navbar />
      <div className="testitext"> Testimonial</div>
      <Testimonial/>
      <Footer2/>
    </div>
    </>
  );
};

export default Testimonialpage;
