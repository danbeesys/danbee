import { Carousel } from 'react-responsive-carousel';
import './ImageIntroduce.css';
import photo1 from './pic/20240610_111632.jpg';
import photo2 from './pic/20240610_125329.jpg';
import photo3 from './pic/20240610_125607.jpg';
import photo4 from './pic/20240610_메뉴간판.jpg';
import photo5 from './pic/20240619_외부간판.jpg';
import photo6 from './pic/20240710_172726.jpg';
import photo7 from './pic/20240710_185942.jpg';
import photo8 from './pic/20240716_사무실.jpg';
import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";

interface item {
  src: string,
  width: number,
  height: number,
  content: string,
}

interface PhotoClickHandlerParams {
  index: number;
  photo: any; // Adjust this type according to your photo object structure
  next?: any; // Adjust these types according to the structure used in your Gallery component
  previous?: any; 
}


const ImageIntroduce: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  return (
    <div>
    <Gallery photos={itemData} onClick={(e, {index}) => {
        setCurrentImage(index);
        setViewerIsOpen(true)
    }} />
      {viewerIsOpen && (
          <div className="popup-overlay" onClick={() => setViewerIsOpen(false)}>
          <div className="popup" onClick={e => e.stopPropagation()}>
             <img className='image_box' src={itemData[currentImage].src} />
          </div>
        </div>
      )}
  </div>);
}

export default ImageIntroduce;

const itemData: item[] = [
    {
      src: photo1,
      width: 4,
      height: 3,
      content: "설명",
    },
    {
      src: photo2,
      width: 4,
      height: 3,
      content: "설명",
    },
    {
      src: photo3,
      width: 4,
      height: 3,
      content: "설명",
    },
    {
      src: photo4,
      width: 4,
      height: 3,
      content: "설명",
    },
    {
      src: photo5,
      width: 4,
      height: 3,
      content: "설명",
    },
    {
      src: photo6,
      width: 4,
      height: 3,
      content: "설명",
    },
    {
      src: photo7,
      width: 4,
      height: 3,
      content: "설명",
    },
    {
      src: photo8,
      width: 4,
      height: 3,
      content: "설명",
    },
  ];