import React, { useEffect, useState } from "react";
import { Link, useLocation,Routes } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import plcholderImage from "../assets/placeHolder.jpeg";

function Collection(props) {
  const location = useLocation();
  let pathname = location.pathname;
  pathname = pathname.replace("/", "Home > ");
  pathname = pathname.replace("c", "C");
  const { brands } = props;

  return (
    <>
      {(!brands)?
      <Spinner animation="border" role="status" className="d-flex justify-content-between align-items-center" style={{ height: '100vh' }}>
    <span className="visually-hidden">Loading...</span>
     </Spinner>:
          <div className="container collection">
        <p className="small_text" style={{marginTop: "30px"}}>{pathname}</p>
      <h3 className="heading">Collection</h3>
      <div className="row card-container">
        {brands.map((item,i) =>{
              let name = item.brandName.replace(" ", "_");
            return(
              <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-4 mr-3 card" key={i}>
                {item.image ? (
                  <img src={item.image} className=" product-image" alt={item.brandName} />
                  ) : (
                  <img src={plcholderImage} className=" product-image" alt="Placeholder" />
                 )}
                  <div className="card-body text-center">
                    <h4 className="card-title heading">{item.brandName}</h4>
                    <span className="small_text">{item.productList.length} product</span>
                    <p className=" description">{item.description}</p>
                   <Link to={`/collection/${name}_products`}><button className="button main-button ">Shop Now</button></Link> 
                  </div>
                </div>
            )
        } 
      )}
      </div>
    </div>}
   </>  
  );
}

export default Collection;
