import React, { useEffect } from 'react';
import { useLocation,Link } from 'react-router-dom';
import AddressInfo from '../components/customerinfo';

function Checkout() {
  const location = useLocation();
  let pathname = location.pathname;
  pathname = pathname.replace("/", "Home > ");
  pathname = pathname.replace("checkout", "Cart > Information");


  return (
    <div className='checkout'>
      <p className="small_text container" style={{ marginTop: "30px" }}>
        {pathname}
      </p>
      <div className='container'>
        <AddressInfo/>

        {/* <div className='shipping-method'>

          <h4>Delivery Method</h4>

          <div className='shipment-options'>
          <div className='shipment-option activ'>
          <input type="radio" name="shippingMethod" value="pickUp" checked />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" focusable="false" aria-hidden="true" class="a8x1wuo _1fragemf4 _1fragemh3 _1fragemd8 _1fragemd4"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10.5h-.9a.7.7 0 0 1-.7-.7V3.5a.7.7 0 0 1 .7-.7h4.2a.7.7 0 0 1 .7.7v7H5.4m-2.4 0a1.2 1.2 0 0 0 2.4 0m3.2 0a1.2 1.2 0 0 0 2.4 0"></path><path stroke-linecap="round" stroke-linejoin="round" d="M5.4 10.5a1.2 1.2 0 0 0-2.4 0m8 0a1.2 1.2 0 0 0-2.4 0m-1.6 0h1.6"></path><path stroke-linecap="round" stroke-linejoin="round" d="M11 10.5h.9a.7.7 0 0 0 .7-.7V7H7m0-2.8h2.51a.7.7 0 0 1 .495.205L12.6 7"></path></svg>
            <label>
              Ship
            </label>
            </div>  

          <div className='shipment-option'>
          <input type="radio" name="shippingMethod" value="pickUp" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" focusable="false" aria-hidden="true" class="a8x1wuo _1fragemf4 _1fragemh3 _1fragemd8 _1fragemd4"><path stroke-linecap="round" d="m1.4 4.2 1.959-2.612a.47.47 0 0 1 .376-.188h6.53a.47.47 0 0 1 .376.188L12.6 4.2m-11.2 0h11.2m-11.2 0S.8 7 2.8 6.989m9.8-2.79s.6 2.8-1.4 2.79m-8.4 0c2 .01 2.2-2.79 2.2-2.79S5 7 7 7s2-2.8 2-2.8.2 2.8 2.2 2.79m-8.4 0v5.14c0 .26.21.47.47.47H5.6m5.6-5.61v5.14c0 .26-.21.47-.47.47H8.3m-2.7 0V9.57c0-.259.21-.47.47-.47h1.76c.26 0 .47.211.47.47v3.03m-2.7 0h2.7"></path></svg>
            <label>
              Pick Up
            </label>
            </div>  
          </div>

        </div>
      <div className='data-box'>
        <div className='contact d-flex justify-content-between align-items-center'>
          <span className='small_text'>Contact</span>
          <span className='mail'>aya.abdelhakeem18@gmail.com</span>
          <a className='change'>Change</a>
        </div>
        <div className='ship-to d-flex justify-content-between align-items-center'>
        <span className='small_text'>Ship to</span>
        <span className='address'>new cairo3 ,gardenia heights 2, 119 ي, C, new cairo, 11835, Egypt</span>
        <a className='change'>Change</a>
        </div>
      </div>  
      <Link to="/payment"><button className="button main-button ">Continue to Payment</button></Link>  */}

      </div>
    </div>
  )
}

export default Checkout;
