import React, { useEffect } from 'react';
import img from "../assets/ella-mid-banner.webp"
import { useCart } from 'react-use-cart';
import plcholderImage from "../assets/placeHolder.jpeg";

function TopProducts(props) {
    const { addItem } = useCart();

    useEffect(()=>window.scrollTo({top: 250, behavior: 'smooth' }),[]);
  return (
    <>
    <div className='products-banner' style={{background:`url(${img})`}}></div> 
    <div className='pdp container-fluid'>
      <h3 className='heading'>{props.name}</h3>
      <p className='border-bottom pb-3 p'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      <div className="row">
        {props.list.map((elle, i) => {
          return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 mr-3 card" key={i}>
              
                <img src={elle.img} className="product-image" alt={elle.name} />

              <div className="card-body text-center">
                <h4 className="card-title heading">{elle.name}</h4>
                <p className="card-text p description small_text">{elle.description}</p>
                <div className='price'>{elle.price +"$"}</div>
                <button className="button sec-button" onClick={()=>addItem(elle)} >Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  )
}

export default TopProducts
