import React from 'react';
import { useLocation } from 'react-router-dom';
import plcholderImage from "../assets/placeHolder.jpeg";
import { useCart } from 'react-use-cart';

function Products_page(props) {
    const location = useLocation();
    let pathname = location.pathname;
    pathname = pathname.replace("/", "Home > ");
    pathname = pathname.replace("c", "C"); 
    pathname = pathname.replace("/", " > "); 
    const { brand } = props;
    const { addItem } = useCart()


  return (
    <div className='pdp container-fluid'>
      <p className="small_text" style={{marginTop: "30px"}}>{pathname}</p>  
      <h3 className="heading">{brand.brandName}</h3>
      <p className="border-bottom pb-3 p">{brand.description}</p>
      <div className="row">
        {brand.productList.map((elle, i) => {
          return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 mr-3 card" key={i}>
              {elle.image_link ? (
                <img src={elle.image_link} className="product-image" alt={elle.name} />
              ) : (
                <img src={plcholderImage} className="product-image" alt="Placeholder" />
              )}
              <div className="card-body text-center">
                <h4 className="card-title heading">{elle.name}</h4>
                <p className="card-text p description small_text">{elle.description}</p>
                <div className='price'>{elle.price}</div>
                <button className="button sec-button" onClick={()=>addItem(elle)} >Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products_page
