import React from "react";
import "./Product.css";
import products from "./Products";
import { Card } from "react-bootstrap";

const Product = (props) => {
   
  return (
    
    <>
      <h1 className="ours">Our <span style={{color:"red"}}> Products</span></h1>
      {products.map((all) => {
        return (
          <>
      
            <Card style={{ width: "18rem", display: "inline-block" ,backgroundColor:"#f8f8f8",margin:"120px",marginLeft:"40px",marginRight:"105px",marginBottom:"-20px",padding:"10px"}}>
              <Card.Img variant="top" src={all.image} style={{height:"300px"}}/>
              <Card.Body>
                <Card.Title>{all.name} {all.price}</Card.Title>
                <Card.Text>
                  <button className="addtocart" onClick={()=>onAdds(all.id ,all.name,all.image,all.price)}>Add to cart</button>
                </Card.Text>
              </Card.Body>
            </Card>
            
          </>
        );
      })}

      <div className="row mx-0 py-0">
    <button className="viewallProd">View All Products</button>
    </div>
    </>
    
  );
};

export var cartitems=[]
const onAdds=(id,name,image,price)=>{
  cartitems.push({"id":id,"name":name,"image":image,"price":price})
  console.log(cartitems)
}

export default Product;
