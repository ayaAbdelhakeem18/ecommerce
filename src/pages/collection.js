import React, { useEffect, useState } from "react";
import { Link, useLocation,Routes } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import axios from "axios";



function Collection(props) {
let [count,setcount]=useState(0);

useEffect(()=>window.scrollTo({top: 0, behavior: 'smooth' }),[]);

const getlength=async (id)=>{
    try{
    let data =await axios.get(`/api/DB.json`);
    const res = data.data.products.filter(product => product.brand_id === id);
    setcount(res.length);
  }catch(e){
    console.log(e)
  }
  };
  const location = useLocation();
  let pathname = location.pathname;
  pathname = pathname.replace("/", "Home > ");
  pathname = pathname.replace("c", "C");
  return (
    <>
    
            <div className="container collection">
            <p className="small_text" style={{marginTop: "30px"}}>{pathname}</p>
          <h3 className="heading">Collection</h3>
          <div className="row card-container">
            {props.brands.map((item,i) =>{
              getlength(item.id);
              return(
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-4 mr-3 card" key={i}>
                      <img src={item.img} className="product-image" alt={item.name} />
                      <div className="card-body text-center">
                        <h4 className="card-title heading">{item.name}</h4>
                        <span className="small_text">{count?count:""} product</span>
                        <p className=" description">{item.description}</p>
                       <Link to={`/${item.name}_products`}><button className="button main-button ">Shop Now</button></Link> 
                      </div>
                    </div>)
                ;}
          )}
          </div>
        </div> 
  
    
   </>
  );
}

export default Collection;
