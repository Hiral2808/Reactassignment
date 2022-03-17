import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css";

const CarouselCom = () => {
  return (
    <>
    <Carousel variant="dark">
      <Carousel.Item className="bgimg">    
        <div className="seconds">
          <h1 style={{fontSize:"80px",color:"#dc3545"}} >
            
            Sale 20% Off 
            
          </h1>
          <h1 style={{fontSize:"80px",color:"black"}}> On Everything</h1>
          
          <p>
            
            Explicabo esse amet tempora quibusdam laudantium, laborum <div></div>eaque
            magnam fugiat hic? Esse dicta aliquid error repudiandae <div></div>earum
            suscipit fugiat molestias, veniam, vel architecto veritatis<div></div> delectus
            repellat modi impedit sequi.
          </p>
          </div>
         <button className="btnshop">Shop Now</button>
      </Carousel.Item>
      <Carousel.Item className="bgimg">
      <div className="seconds">
          <h1 style={{fontSize:"80px",color:"#dc3545"}} >
            
            Sale 20% Off 
            
          </h1>
          <h1 style={{fontSize:"80px",color:"black"}}> On Everything</h1>
          
          <p>
            
            Explicabo esse amet tempora quibusdam laudantium, laborum <div></div>eaque
            magnam fugiat hic? Esse dicta aliquid error repudiandae <div></div>earum
            suscipit fugiat molestias, veniam, vel architecto veritatis<div></div> delectus
            repellat modi impedit sequi.
          </p>
          </div>
         <button className="btnshop">Shop Now</button>
      </Carousel.Item> 
      <Carousel.Item className="bgimg">
      <div className="seconds">
          <h1 style={{fontSize:"80px",color:"#dc3545"}} >
            
            Sale 20% Off 
            
          </h1>
          <h1 style={{fontSize:"80px",color:"black"}}> On Everything</h1>
          
          <p>
            
            Explicabo esse amet tempora quibusdam laudantium, laborum <div></div>eaque
            magnam fugiat hic? Esse dicta aliquid error repudiandae <div></div>earum
            suscipit fugiat molestias, veniam, vel architecto veritatis<div></div> delectus
            repellat modi impedit sequi.
          </p>
          </div>
         <button className="btnshop">Shop Now</button>
      </Carousel.Item> 
    </Carousel>
    </>
  );
};

export default CarouselCom;
