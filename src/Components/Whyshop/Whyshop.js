import React from "react";
import "./Whyshop.css";
import { CardGroup, Card } from "react-bootstrap";
import { MdLocalShipping } from "react-icons/md";
import {FaMedal} from 'react-icons/fa'
import {GiCircle} from 'react-icons/gi'
const Whyshop = () => {
  return (
    <>
    <div>
      <p className="whyshop">Why Shop With Us</p>
      
        
        <CardGroup >
         <Card className="cards" style={{margin:"10px"}}>
         <MdLocalShipping size="2x" className="ml-3"/>
            <Card.Body>
             <Card.Text className="fastdeltext"> Free Delivery</Card.Text>
              <Card.Text className="variations">
                variations of passages of Lorem Ipsum available
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="cards"  style={{margin:"10px"}}>
            <GiCircle size="2x" className="ml-3"/>
            <Card.Body>
              <Card.Text className="fastdeltext"> Free Shiping</Card.Text>
              <Card.Text className="variations">
                variations of passages of Lorem Ipsum available
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="cards"  style={{margin:"10px"}}>
            <FaMedal size="2x" className="ml-3"/>
            <Card.Body>
              <Card.Text className="fastdeltext">Best Quality</Card.Text>
              <Card.Text className="variations">
                variations of passages of Lorem Ipsum available
              </Card.Text>
            </Card.Body>
          </Card>
        
      </CardGroup>
      
    </div>
    </>
  );
};

export default Whyshop;
