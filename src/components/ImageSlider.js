import React, { useState, useEffect } from 'react';
import './ImageSlider.css';
import images from './imageData';

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider-container">
            <div className="image-wrapper">
                <img src={images[currentIndex].src} alt="" className="slider-image" />
                <button className="slider-button left" onClick={prevSlide}>❮</button>
                <button className="slider-button right" onClick={nextSlide}>❯</button>
            </div>
            <div className="slider-caption" dangerouslySetInnerHTML={{ __html: images[currentIndex].caption }}></div>
        </div>
    );
};

export default ImageSlider;
