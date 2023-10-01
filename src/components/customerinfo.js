import React, { useState } from 'react';
import {useForm, FormProvider} from "react-hook-form";
import FormInput from './formInput';


function AddressInfo() {
  const methods=useForm();
  const[shippingCountries,setShippingCountries]=useState([]);
  const[shippingCountry,setShippingCountry]=useState("");
  const[shippingStates,setShippingStates]=useState([]);
  const[shippingState,setShippingState]=useState("");
  const[shippingOptions,setShippingOptions]=useState([]);
  const[shippingOption,setShippingOption]=useState("");

  const handleSubmit=()=>{

  }
  const handleChange=()=>{

  }

  return (
    <div>
    <h2 className='heading'>Name & Address</h2>

    <FormProvider {...methods}>
    <form className="info-form" onSubmit={handleSubmit}>
      <div className="form-row d-flex justify-content-between">
        <div className="form-group col-md-6">
          <label htmlFor="firstName">First Name</label>
          <FormInput type="text" name="firstName" value="" required="required" className="form-control" id="firstName"/>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="lastName">Last Name</label>
          <FormInput type="text" name="lastName" value="" required="required" className="form-control" id="lastName"/>
        </div>
      </div>
  <div className='form-row  d-flex justify-content-between'>
      <div className="form-group col-md-6">
        <label htmlFor="email">Email Address</label>
        <FormInput type="email" name="email" value="" required="required" className="form-control" id="email"/>
      </div>
  <div className="form-group col-md-6">
        <label htmlFor="mobileNumber">Mobile Number</label>
        <FormInput type="tel" name="mobileNumber" value="" required="required" className="form-control" id="mobileNumber"/>
      </div>
  </div>
      <div className="form-row form-group">
        <label htmlFor="address">Address</label>
        <FormInput type="text" name="address" value="" required="required" className="form-control" id="address"/>
      </div>
      <div className="form-row d-flex justify-content-between">

        <div className="form-group col-3">
          <label htmlFor="city">City</label>
          <FormInput type="text" name="city" value="" required="required" className="form-control" id="city"/>
        </div>

        <div className="form-group col-3">
          <label htmlFor="state">State</label>
          <select className="form-control" id="state" name="state" > 
            <option value="Select State">Select State</option>
            <option value="Select State">New york</option>
            <option value="Select State">LA</option>
            <option value="Select State">California</option>
         </select>
        </div>
  <div className="form-group col-4">
        <label htmlFor="country">Country</label>
      <select className="form-control" id="state" name="state"  required> 
            <option value="Select State">Select State</option>
            <option value="Select State">New york</option>
            <option value="Select State">LA</option>
            <option value="Select State">California</option>
         </select>
      </div>
      </div>
      <div className="form-row d-flex justify-content-between">
      <div className="form-group col-md-6">
        <label htmlFor="password">Password</label>
        <FormInput type="password" name="password" value="" required="required" className="form-control" id="password"/>
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <FormInput type="password" name="confirmPassword" value="" required="required" className="form-control" id="confirmPassword"/>
      </div>
      </div>
    <div className='form-row form-group'>
    <button type="submit" className="btn btn-primary"> Submit</button>
     </div>
    </form>
    </FormProvider>
  </div>
  )
}

export default AddressInfo;

