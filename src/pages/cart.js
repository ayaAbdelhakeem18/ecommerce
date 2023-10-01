import React, { useState, useEffect, useContext } from "react";
import { useCart } from "react-use-cart";
import { Link, useLocation } from "react-router-dom";
import OrderSummary from "../components/orderSummary";

function Cart() {
  const location = useLocation();
  let pathname = location.pathname;
  pathname = pathname.replace("/", "Home > ");
  pathname = pathname.replace("cart", "Your Cart");

  useEffect(()=>window.scrollTo({top: 150, behavior: 'smooth' }),[]);

  const {
    cartTotal,
    emptyCart,
    isEmpty,
    totalItems,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem
  } = useCart();

  return (
    <div className="cart">
      <p className="small_text container" style={{ marginTop: "30px" }}>
        {pathname}
      </p>
<div className="container" >
      <h3 className="heading">
        Your Cart
      </h3>
<div className="row ">
      {isEmpty ? (
          <div className="cart-items text-center">
            <div className="small_text cart-empty">Your Cart is empty</div>
          </div>
      ) : (
        <>
        <div className="col" style={{paddingRight:"60px"}}>
          <div className=" text-center">
            {items.map((elle, i) => {
              return (
                <>
                  <div className="row mb-3 pr-row">
                    <div className="col" >
                      <div className="pr-img " >
                      <img
                        src={elle.img}
                        alt={elle.name}
                        className="img-fluid"
                      />
                    </div>
                    </div>
                    <div className="col column">
                      <h4 className="mb-2">{elle.name}</h4>
                      <p className="mb-2">${elle.itemTotal}</p>
                      <div className="d-flex align-items-center justify-content-center">
                        <div className="btn-group">
                          <button
                            className="btn btn-sm btn-light"
                            onClick={() =>
                              updateItemQuantity(elle.id, elle.quantity - 1)
                            }
                          >
                            -
                          </button>
                          <button className="btn btn-sm btn-light" disabled>
                            {elle.quantity}
                          </button>
                          <button
                            className="btn btn-sm btn-light"
                            onClick={() =>
                              updateItemQuantity(elle.id, elle.quantity + 1)
                            }
                          >
                            +
                        </button>

                        <button
                         className="btn btn-sm btn-light"
                         onClick={() => removeItem(elle.id)} >
                         <i className="fas fa-trash-alt" style={{ color: 'red' }}></i>
                        </button>

                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
            <div className="cart-btns" style={{textAlign:"start"}}>
              <button onClick={()=>{emptyCart()}} className="btn btn-secondary btn-block">Empty Cart</button>
              <Link to={"/"}  className="btn btn-secondary btn-block">Go to Home</Link>
            </div>
      </div>
      </div>
      <OrderSummary cartTotal={cartTotal}/>
      </>
      )}
    </div>
    </div>
    </div>
  );
}

export default Cart;
