import React from 'react';

const Gallery = (props) => {
  const images = props.products.map((elle)=>elle.image_link);

  return (
    <div className="gallery row justify-content-between ">
      {images.map((image, index) => (
        <div className="gallery-item" style={{backgroundImage:`url(${image})`}} key={index}>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
