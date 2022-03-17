import React  from 'react'
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'
import {BsFillCartFill} from "react-icons/bs"
// import {AiOutlineSearch} from "react-icons/ai"
const NavbarCom =()=> {
  
    return (
      <>
        <Navbar bg="light" expand="lg">
        <Container fluid>
          
          <img src='../images/logo.png'className='ml-4 mt-4 logo_left' height="50px" alt="logo"/>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link  className='navbar_font' ><Link to="/"  style={{marginLeft:"20px",textDecoration:"none",color:"black"}}>Home</Link></Nav.Link>
              
              <NavDropdown title="Pages" id="navbarScrollingDropdown" className='navbar_font'>
                <NavDropdown.Item ><Link to="/About" style={{textDecoration:"none",color:"black"}}>About</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to="/Testimonialpage" style={{textDecoration:"none",color:"black"}}>Testimonial</Link></NavDropdown.Item>
                
              </NavDropdown>
              <Nav.Link  className='navbar_font'><Link to="/Productspage" style={{textDecoration:"none",color:"black"}}>Product</Link></Nav.Link>
              <Nav.Link  className='navbar_font'><Link to="/Blog" style={{textDecoration:"none",color:"black"}}>Blog</Link></Nav.Link>
              <Nav.Link  className='navbar_font'><Link to="/Contactuspage" style={{textDecoration:"none",color:"black"}}>Conatct</Link></Nav.Link>
              <Nav.Link  className='navbar_font'>
                <Link to="/Cart" style={{textDecoration:"none"}}><BsFillCartFill /></Link></Nav.Link>
                {/* <Nav.Link  className='navbar_font' >
                 <AiOutlineSearch/></Nav.Link> */}

             
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
      )
    
  }

export default NavbarCom;
