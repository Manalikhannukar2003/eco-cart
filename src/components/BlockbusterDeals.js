import React from "react";


function BlockbusterDeals() {
  return (
    <div className="blockbuster-deals">
         <div className="bg-success bg-opacity-25 py-3">
      <h2 className="text-center my-4">JHATPAT DEALS</h2>
      </div>
      <div className="d-flex justify-content-around" >
        <div className="deal-item">
          <img
            src="https://i.pinimg.com/474x/88/cf/f7/88cff71f5a8d59606e9ca5a1b6494075.jpg" 
            alt="Product 1"
            className="img-fluid"  
            style={{ width: "400%", height: "350px", objectFit: "cover" }}
        
           
          />
          
           <h5 className="text-center mt-2">From Rs 369</h5>
          <p className="text-center mt-2">ORGANIC SUNSCREEN</p>
         
        </div>
      
        <div className="deal-item">
          <img
            src="https://i.pinimg.com/474x/23/6f/64/236f6401b81484b09f15bdbe7e0d298e.jpg"
            alt="Product 2"
            className="img-fluid"
            style={{ width: "400%", height: "350px", objectFit: "cover" }}
          />
           <h5 className="text-center mt-2">From Rs 479</h5>
          <p className="text-center mt-2">SOAP</p>
         
        </div>
        <div className="deal-item">
          <img
            src="https://i.pinimg.com/474x/70/cb/cc/70cbcc54637df72a54a4bb434f6018c1.jpg"
            alt="Product 3"
            className="img-fluid"
            style={{ width: "400%", height: "350px", objectFit: "cover" }}
          />
           <h5 className="text-center mt-2">From Rs 754</h5>
          <p className="text-center mt-2">BAMBOO UNTENSIL</p>
        </div>
        <div className="deal-item">
          <img
            src="https://i.pinimg.com/474x/71/e4/39/71e439ad9b2e335083cfc9aca3b0474b.jpg"
            alt="Product 4"
            className="img-fluid"
            style={{ width: "300%", height: "350px", objectFit: "cover" }}
           
          />
           <h5 className="text-center mt-2">From Rs 666</h5>
          <p className="text-center mt-2">COMPOSTABLE TRASH BAGS</p>
        </div>
        
        
      </div>
    </div>
  );
}

export default BlockbusterDeals;