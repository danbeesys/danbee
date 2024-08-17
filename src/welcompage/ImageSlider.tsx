import React, { useState, useEffect } from 'react';
import './ImageSlider.css';
import waiting from "./pic/20240610_대기실.jpg";
import logoChain from "./pic/20240710_133854.jpg";
import hall from "./pic/20240710_복도.jpg";

const ImageSlider: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [waiting, logoChain, hall];
    const explanations = [
      "나는 아직 아이의 껍질을 벗지 못했는데 사람들은 어른이 되어야 한다고 합니다",
      "당신에게서 좋은 울림이 날 수 있도록...",
      "당신과 공명하는 시간, 공간이 삶의 빛깔을 변화시키는 순간입니다"
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="image-slider">
        <div className='header-content'>
          <p>마음의 어려움, 진심으로 귀기울입니다.</p>
          <h1>단비 심리 상담연구소</h1>
        </div>
        <div className="explanation-container">
          <p>{explanations[currentImageIndex]}</p>
        </div>
        <div className="image-container">
          <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
        </div>
      </div>
    );
  };

export default ImageSlider;