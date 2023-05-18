import React from 'react';
import { Link } from 'react-router-dom';

const HomeSection = () => {
  return (
      <div className=" homeBg" id='home'>
        <div className="box">   
          <h2 className="text-center mb-4 heading">Sirume</h2>
            <p className="text-center p">
            Quisquemos sodales suscipit tortor ditaemcos
            condimentum meleifend diverra loremous.
            </p>
            <div className="text-center">
            <Link to={"/collection"}><button className="button main-button">Shop Now</button></Link>
          </div>
        </div>
    </div>
  );
}

export default HomeSection;