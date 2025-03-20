import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  const [currentImgIndex,setCurrentImgIndex] = useState(0);
  const lastImageIndex = images.length - 1;
  const firstImgIndex = 0;

  function onLeft(){  
    if(currentImgIndex == firstImgIndex) setCurrentImgIndex(lastImageIndex);
    else setCurrentImgIndex(currentImgIndex - 1);
  }
  
  function onRight(){
    if(currentImgIndex == lastImageIndex) setCurrentImgIndex(firstImgIndex);
    else setCurrentImgIndex(currentImgIndex + 1);
  }

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={onLeft}/>

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={images[currentImgIndex].src} alt={images[currentImgIndex].alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={onRight}/>
    </div>
  );
};