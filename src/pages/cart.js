import React, { useState,useEffect,useContext } from 'react';
import { useCart } from 'react-use-cart';
import { MyContext } from '../components/Nav';

function Cart() {

  const contextValue = useContext(MyContext);

  const {
    cartTotal,
    isEmpty,
    totalItems,
    totalUniqueItems,
    items,
    updateItemQuantity,
  } = useCart();

  return (
  <div className='overlay' style={contextValue.contextValue?{display:"block"}:{display:"none"}}>
    <div className={`cart`}>
     <div className='d-flex justify-content-between'>
        <h2 className='heading'>Shopping Cart</h2>
        <i class="fa fa-solid fa-xmark" onClick={()=>{contextValue.setContextValue(false)}}></i>
     </div>
      <p className='small_text'  style={{ marginBottom: '13px' }}>{totalUniqueItems + " items"}</p>

      {isEmpty?
      <div>
      <p className='small_text'>Free shipping for all orders over $150.00!</p>
      <div className='cart-items text-center'>
      <div className='small_text'>Your Cart is empty</div>
      </div>
      </div>:
      <div>
       {cartTotal>=50?
       <p className='small_text'>congratulations you got a free shipping!</p>
       :
       <p className='small_text'>{`Only $ ${150-cartTotal} away from Free Shipping`}</p>
       } 
      <div className='cart-items text-center'>
      {items.map((elle,i)=>{
        return(
          <div className="row mb-3">
          <div className="col-md-2" style={{width:"150px"}}>
            <img src={elle.image_link} alt={elle.name} className="img-fluid" />
          </div>
          <div className="col">
            <h4 className="mb-2">{elle.name}</h4>
            <p className="mb-2">Price: ${elle.itemTotal}</p>
            <div className="d-flex align-items-center justify-content-center">
              <div className="btn-group">
                <button
                  className="btn btn-sm btn-light"
                  onClick={() => updateItemQuantity(elle.id, elle.quantity - 1)}
                  >
                  -
                </button>
                <button className="btn btn-sm btn-light" disabled>
                  {elle.quantity}
                </button>
                <button
                  className="btn btn-sm btn-light"
                  onClick={() => updateItemQuantity(elle.id, elle.quantity + 1)}
                  >
                  +
                </button>
              </div>
            </div>
            
          </div>
        </div>
        )
      })} 
      <div className='total d-flex justify-content-between'><span>Quantity:</span><span>{totalItems}</span></div>
      <div className='total d-flex justify-content-between'><span>Total:</span><span>{cartTotal}</span></div>
      <div className='text-center'> <button className='button sec-button' style={{ width: '100%' }}>Checkout</button></div> 
      </div>
      </div>
      }
    </div> 
    </div>
  )
}

export default Cart
