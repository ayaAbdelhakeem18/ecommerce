import React from 'react';
import { Link } from 'react-router-dom';



function OrderSummary(props) {
  const shipping=50;  
  return (
    <div className="col order-summary-col">
    <div className="order-summary">
      <h4>Order Summary</h4>
      <div className="mb-3 coupon">
        <label htmlFor="coupon">Coupon Code:</label><br></br>
        <div className='d-flex'>
        <input
          type="text"
          id="coupon"
          className="form-control"
          placeholder="Enter coupon code"
        />
        <input type='submit' value={"apply"} className='btn btn-primary'></input>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <span>Subtotal:</span>
        <span>${props.cartTotal}</span>
      </div>
      <div className="d-flex justify-content-between">
        <span>Shipping:</span>
        <span>${shipping}</span> 
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <span>Total:</span>
        <span>${props.cartTotal + shipping}</span> {/* Update with actual total */}
      </div>
      <div className='btns'>
      <div className="text-center mt-3">
        <Link to={"/checkout"}>
          <button
            className=" button main-button"
            style={{ width: "100%" }}
          >
            Proceed to Checkout
          </button>
        </Link>
      </div>
      <div className="text-center mt-3">
      <Link to={"/collection"}>
          <button
            className=" button sec-button"
            style={{ width: "100%" }}
          >
            continue shopping
          </button>
        </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default OrderSummary
