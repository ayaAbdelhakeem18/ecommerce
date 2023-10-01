import React from 'react';
import { loadStripe ,} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Payment from './payment';

const puplic_key="pk_test_51Mmbm1ETGy9oCL26gFjRNIhTQxgI1ttDSFLf5J7I25LaPN7Lf7jOaSXfWtzgTMkegOlNLsaf391YpcGJEqIomw8J00rY9qnXwU";


function StripeContainer() {
 const stripePromise = loadStripe(puplic_key);

  return (
    <Elements stripe={stripePromise}>
    <Payment/>
      
    </Elements>
  )
}

export default StripeContainer
