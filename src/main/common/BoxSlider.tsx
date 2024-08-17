import './BoxSlider.css';
import React, { useState, useEffect, useRef} from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface BoxContent {
    title: string;
    description: string;
  }

const BoxSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const boxWrapperRef = useRef<HTMLDivElement>(null);
    const boxes: BoxContent[] = [
      { title: "Box 1", description: "Description for Box 1" },
      { title: "Box 2", description: "Description for Box 2" },
      { title: "Box 3", description: "Description for Box 3" },
      { title: "Box 4", description: "Description for Box 4" },
      { title: "Box 5", description: "Description for Box 5" },
      { title: "Box 6", description: "Description for Box 6" },
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
  
      return () => clearInterval(interval);
    }, []);
  
    const nextSlide = () => {
      if (!isAnimating) {
        setIsAnimating(true);
        if (boxWrapperRef.current) {
          boxWrapperRef.current.style.transition = 'transform 0.5s ease';
          boxWrapperRef.current.style.transform = 'translateX(-50%)';
        }
  
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % boxes.length);
          if (boxWrapperRef.current) {
            boxWrapperRef.current.style.transition = 'none';
            boxWrapperRef.current.style.transform = 'translateX(0)';
          }
          setIsAnimating(false);
        }, 500);
      }
    };
  
    const prevSlide = () => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + boxes.length) % boxes.length);
        
        if (boxWrapperRef.current) {
          boxWrapperRef.current.style.transition = 'none';
          boxWrapperRef.current.style.transform = 'translateX(-50%)';
          
          setTimeout(() => {
            if (boxWrapperRef.current) {
              boxWrapperRef.current.style.transition = 'transform 0.5s ease';
              boxWrapperRef.current.style.transform = 'translateX(0)';
            }
          }, 500);
        }
  
        setTimeout(() => setIsAnimating(false), 500);
      }
    };
  
    const getVisibleBoxes = () => {
      const prevIndex = (currentIndex - 1 + boxes.length) % boxes.length;
      const nextIndex = (currentIndex + 1) % boxes.length;
      return [boxes[prevIndex], boxes[currentIndex], boxes[nextIndex]];
    };
  
    return (
      <div className="box-slider-container">
        <button className="arrow left" onClick={prevSlide}><FaArrowLeft /></button>
        <div className="box-slider">
          <div className="box-wrapper" ref={boxWrapperRef}>
            {getVisibleBoxes().map((box, index) => (
              <div key={index} className="box">
                <h3>{box.title}</h3>
                <p>{box.description}</p>
              </div>
            ))}
          </div>
        </div>
        <button className="arrow right" onClick={nextSlide}><FaArrowRight /></button>
      </div>
    );
  };
  
export default BoxSlider;