import React, { useRef, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import content from '../../content';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';


const Category = () => {
  let mdScreen = useMediaQuery({ maxWidth: 992 });
  let smScreen = useMediaQuery({ maxWidth: 768 });

  const carouselRef = useRef(null);

  const handleIndicatorClick = (slideIndex) => {
    const carouselElement = carouselRef.current;
    if (carouselElement) {
      const carousel = window.bootstrap.Carousel.getInstance(carouselElement);
      carousel.to(slideIndex);
    }
  };
  
  // useEffect(() => { 
  //   const carouselElement = carouselRef.current;
  //   if (carouselElement) {
  //     carouselElement.addEventListener('slide.bs.carousel', () => {
  //       // This event listener ensures that the carousel items are properly updated
  //     });
  //   }
  // }, []);
    return (
    <div className="container-fluid category carousel slide " data-bs-ride="carousel" style={{margin:"unset"}}>
      <p className="text-center mb-0 p">Free Shipping Worldwide. No Minimum Purchase*</p>
      <div className="row gx-2 justify-content-between ">
       {content.category.map((item,i)=>{
        let link= item.name==="Most Viewed"?"/mostViewed":item.name=="Editor picks"?"/editorPicks":"/topSellings";
        return( 
        // smScreen?
        //  <div className={i==0?"position-relative col-lg-4 col-md-6 col-sm-12 item  ":"position-relative col-lg-4 col-md-6 col-sm-12 item "} key={i}>
        //  <div className='img-cont'>   
        //  <div className='zoom-image '>     
        //  <img src={item.img} alt={item.name} className="img-fluid " style={{minWidth:"100%"}}/>
        //  <h3 className="text-center mt-3 heading"><Link to={link}>{item.name}</Link></h3>
        //  </div>
        //  </div>
        // </div>:
        // mdScreen?
        //  <div className={i==(0||1)?"position-relative col-lg-4 col-md-6 col-sm-12 item  d-block":"position-relative col-lg-4 col-md-6 col-sm-12 item"} key={i}>
        //  <div className='img-cont'>   
        //  <div className='zoom-image '>     
        //  <img src={item.img} alt={item.name} className="img-fluid " style={{minWidth:"100%"}}/>
        //  <h3 className="text-center mt-3 heading"><Link to={link}>{item.name}</Link></h3>
        //  </div>
        //  </div>
        //  </div>:
           <div className={"position-relative col-lg-4 col-md-4 col-sm-12 item"} key={i} style={{paddingTop:"20px"}}>
           <div className='img-cont'>   
           <div className='zoom-image '>     
           <img src={item.img} alt={item.name} className="img-fluid " style={{minWidth:"100%"}}/>
           <h3 className="text-center mt-3 heading"><Link to={link}>{item.name}</Link></h3>
           </div>
           </div>
           </div>
       )})}
      </div>
      {/* {smScreen ?
        <div className="carousel-indicators" id='indicator'>
          {content.category.map((_, i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={i}
              className={i === 0 ? "active" : ""}
              aria-current={i === 0 ? "true" : "false"}
              aria-label={`Slide ${i + 1}`}
              onClick={() => handleIndicatorClick(i)}
            ></button>
          ))}
        </div>
        : mdScreen ?
          <div className="carousel-indicators" id='indicator'>
            {content.category.slice(0, 2).map((_, i) => (
              <button
                key={i}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={i}
                className={i === 0 ? "active" : ""}
                aria-current={i === 0 ? "true" : "false"}
                aria-label={`Slide ${i + 1}`}
                onClick={() => handleIndicatorClick(i)}
              ></button>
            ))}
          </div>
          : ""
      } */}
    </div>
  );
};
export default Category;
