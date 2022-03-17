// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Components/Home";
import About from "./Components/About/About";
import Testimonialpage from "./Components/TestimonialPage/Testimonialpage";
import Productspage from "./Components/Productspage/Productspage";
import Blog from "./Components/Blogpage/Blog";
import Contactus from "./Components/Contactuspage/Contactus";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart/Cart"

function App() {
  return (

    <BrowserRouter>
    <div className="App">
    
      <Routes>
       <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        
        <Route path="/Testimonialpage" element={<Testimonialpage/>}/>
        <Route path="/Productspage" element={<Productspage />}/>
        <Route path="/Blog" element={<Blog />}/>
        <Route path="/Contactuspage" element={<Contactus />}/>
        <Route path="/Cart" element={<Cart />}/>
        
        </Routes>
      {/* <Navbar/>

      <Carousel/>
      <Whyshop/>
      <NewArriavals/>
      <Product/>
      <Subscribe/>
      <Testimonial/>
      <FooterCom/> */}
      {/* <About/>
      <Footer2/>
      <Testimonialpage/>
      <Productspage/>
      <Blog/>
      <Contactus/> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
