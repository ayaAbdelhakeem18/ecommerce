import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import Footer from '../components/Footer';

const Gallery = (props) => {
  const[images,setimages]=useState();

  useEffect(()=>{

    const catchData=async()=>{
    try{
      let response=await axios.get('/api/DB.json')
        let products=response.data.products;
        const images = products.map((elle)=>elle.img);
        setimages(images);
      
    }catch(e){
    console.log(e);
    }
  }
  catchData();
},[])

  return (
    <>
    {images?(
    <div className="gallery row justify-content-between ">
      {window.scrollTo({top: 50, behavior: 'smooth' })}
    {images.map((image, index) => (
      <div className="gallery-item" style={{backgroundImage:`url(${image})`}} key={index}>
      </div>
    ))}
     </div>
    ):(
          <>
          <Nav />
          <div class=" d-flex align-items-center justify-content-center" style={{height:"40vh"}}>
          <div class="spinner-border text-primary" role="status">
              <span class="sr-only">Loading...</span>
          </div>
          </div>
          <Footer/>
          </>
    )}
    </>
  );
};

export default Gallery;
