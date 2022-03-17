import React from "react";
import "./Testimonial.css";
import { Carousel } from "react-bootstrap";
const Testimonial = () => {
  return (
      <>
    <h1 className="testinom">Customer's Testimonial</h1>
    
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-1 imgclient"
            src="../images/client.jpg"
            alt="First slide"
          />
          <Carousel.Caption >
              <div className="cardtext">
                <h5 > Anna Trevor</h5>
            </div>
             <h5>Customer</h5>
            <p> Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis 
                           </p> 
                            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-1 imgclient"
            src="../images/client.jpg"
            alt="First slide"
          />
          <Carousel.Caption >
              <div className="cardtext">
               <h5 > Anna Trevor</h5>
            </div>
             <h5>Customer</h5>
            <p> Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis 
                           </p> 
              </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-1 imgclient"
            src="../images/client.jpg"
            alt="First slide"
          />
          <Carousel.Caption >
              <div className="cardtext">
                <h5 > Anna Trevor</h5>
            </div>
             <h5>Customer</h5>
            <p> Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis 
                           </p> 
              </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </div>
    </>
  );
};

export default Testimonial;
