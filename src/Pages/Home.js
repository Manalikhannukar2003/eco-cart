import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BlockbusterDeals from "../components/BlockbusterDeals";
import Footer from "../components/Footer";


function Home() {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="700">
          <img src="https://images.unsplash.com/photo-1562158467-f89e51f06266?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2VwYWNrfGVufDB8fDB8fHww" className="d-block w-100" alt="..." 
          style={{  height: "485px", objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h1>SHOP NOW</h1>
            <p><h1><center>STEAL THE BEST DEALS</center></h1></p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="500">
          <img src="https://i.pinimg.com/474x/80/c2/f2/80c2f2b57018f83f0d4a006975aeb462.jpg" className="d-block w-60" alt="..." 
          style={{ width: "70%", height: "485px", objectFit: "cover" }}/>
          <div className="carousel-caption d-none d-md-block">
            <h1>SHAMPOO,FACEWASH AND MORE </h1>
            <p><h1>MIN 25% OFF</h1></p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="500">
          <img src="https://media.istockphoto.com/id/1309359637/photo/natural-skin-care-products.webp?a=1&b=1&s=612x612&w=0&k=20&c=hdupZyV7RKQumfLZblhvVCAWC6KMgtuL740GdZMC66Q=" className="d-block w-100" alt="..." 
           style={{ width: "70%", height: "485px", objectFit: "cover" }}/>
          <div className="carousel-caption d-none d-md-block">
            
            <h1>Under Rs399 Store</h1>
            <p><h1>GRAB THE PRODUCT NOW</h1></p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      
        <BlockbusterDeals />
        <Footer />
      
    </div>
    
  );
}

export default Home;

