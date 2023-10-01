import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import plcholderImage from "../assets/placeHolder.jpeg";
import { useCart } from 'react-use-cart';
import axios from 'axios';
import { Nav } from 'react-bootstrap';
import Footer from '../components/Footer';

function Products_page(props) {

 const[products,setData]=useState();

  useEffect(()=>{
  const fetchData=async ()=>{
  let id = props.id;
  try{
    let data =await axios.get(`/api/DB.json`);
    let br_products= data.data.products.filter(product => product.brand_id == id);
    console.log(br_products)
    setData(br_products)
    
  }catch(e){
    console.log(e)
  }};

  fetchData();
  window.scrollTo({top: 100, behavior: 'smooth' });
  },[])

 let path="Home > " + 'Collection' + ' > ' +(props.heading).charAt(0).toUpperCase()+(props.heading).slice(1);
 const { addItem } = useCart()

  return (
    <>
    {products?
     ( <div className='pdp container-fluid'>
      <p className="small_text" style={{marginTop: "30px"}}>{path}</p>  
      <h3 className="heading">{props.heading}</h3>
      <p className="border-bottom pb-3 p">{props.description}</p>
      <div className="row">
        {products.map((elle, i) => {
          return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 mr-3 card" key={i}>

              <img src={elle.img} className="product-image" alt={elle.name} />

              <div className="card-body text-center">
                <h4 className="card-title heading">{elle.name}</h4>
                <p className="card-text p description small_text">{elle.description}</p>
                <div className='price'>{elle.price + "$"}</div>
                <button className="button sec-button" onClick={()=>addItem(elle)} >Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>)
    :(
      <>
      <Nav />
      <div class=" d-flex align-items-center justify-content-center" style={{height:"40vh"}}>
      <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
      </div>
      </div>
      </>
    )}
    </>
  );
}

export default Products_page
