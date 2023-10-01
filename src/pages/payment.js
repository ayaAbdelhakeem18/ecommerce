import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import OrderSummary from '../components/orderSummary';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import "./paymentForm.css";
import axios from 'axios';

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

function Payment() {
  const stripe=useStripe();
  const elements=useElements();
  const [success, setSuccess] = useState(false);
  const [nameOnCard, setNameOnCard] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const [expYear, setExpYear] = useState('');
  const [cvv, setCvv] = useState('');

  const handleNameChange = (e) => {
    setNameOnCard(e.target.value);
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpMonthChange = (e) => {
    setExpMonth(e.target.value);
  };

  const handleExpYearChange = (e) => {
    setExpYear(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleSubmit=async(e)=>{
  e.preventDefault();
  const {error, paymentMethod}= await stripe.createPaymentMethod({
    type:"card",
    card: elements.getElement(CardElement)
  })
  if(!error){
    try{
     const{id}=paymentMethod;
     const response= await axios.post("",{
      amount:1000,
      id:id
     })
     if(response.data.success){
      console.log("Succeful payment")
      setSuccess(true)
     }
    }catch(error){
     console.log(error)
    }
  }else{
    console.log(error)
  }

  }

  const location = useLocation();
  let pathname = location.pathname;
  pathname = pathname.replace("/", "Home > ");
  pathname = pathname.replace("payment", "Cart > Information > Payment");
    

  return (
    <div className=' container '>
      <p className="small_text " style={{ marginTop: "30px" }}>
        {pathname}
      </p>
      {success?
      <p>Payment succeded</p>:
      <div className='row '>
      <div class="payment col">
              <h3>Payment</h3>
              <label for="fname">Accepted Cards</label>
              <div class="icon-container">
                <i class="fa fa-cc-visa" style={{color:"navy"}}></i>
                <i class="fa fa-cc-amex" style={{color:"blue"}}></i>
                <i class="fa fa-cc-mastercard" style={{color:"red"}}></i>
                <i class="fa fa-cc-discover" style={{color:"orange"}}></i>
              </div>
              <form onSubmit={handleSubmit}>
              {/* <label for="cname">Name on Card</label>
              <input type="text" id="cname" name="cardname" placeholder="John More Doe" value={nameOnCard}  onChange={handleNameChange}/>
              <label for="ccnum">Credit card number</label>
              <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" value={cardNumber}  onChange={handleCardNumberChange}/>
              <label for="expmonth">Exp Month</label>
              <input type="text" id="expmonth" name="expmonth" placeholder="September" value={expMonth}  onChange={handleExpMonthChange}/>
  
              <div class="row">
                <div class="col-50">
                  <label for="expyear">Exp Year</label>
                  <input type="text" id="expyear" name="expyear" placeholder="2027" value={expYear}  onChange={handleExpYearChange}/>
                </div>
                <div class="col-50">
                  <label for="cvv">CVV</label>
                  <input type="text" id="cvv" name="cvv" placeholder="352" value={cvv}  onChange={handleCvvChange}/>
                </div>
              </div>
          <input type='submit' className="button main-button " value="Place Order"/> */}
          <fieldset className='FormGroup'>
            <div className='FormRow'>
              <CardElement options={CARD_OPTIONS}/>
            </div>
          </fieldset>
          </form>
      </div>
      <OrderSummary/>
      </div>
      }

    </div>
  )
}

export default Payment;
