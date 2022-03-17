import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "../About/About.css";
import { Card } from "react-bootstrap";
import { cartitems } from "../Product/Product";
const Cart = () => {
  console.log(cartitems);
  const [cartdata, newCartdata] = useState(cartitems);
  console.log(cartdata);
  

  return (
    <div>
      <Navbar />
      <div className="abouts">Cart page </div>
      <div>
        {cartdata.map((cartitems) => {
          return (
            <div key={cartitems.id}>
              <div>
                <Card
                  style={{
                    width: "18rem",
                    display:"flex",
                    backgroundColor: "#f8f8f8",
                    margin: "120px",
                    marginLeft: "40px",
                    marginBottom: "-20px",
                    padding: "10px",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={cartitems.image}
                    style={{ height: "300px" }}
                  />
                  <Card.Body>
                    <Card.Title>
                      {cartitems.name} {cartitems.price}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Cart;
