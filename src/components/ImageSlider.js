import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable'; // Импортируем библиотеку
import './ImageSlider.css';
import images from './imageData';

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timerRef = useRef(null);

    const startAutoSlide = () => {
        timerRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);
    };

    const resetAutoSlide = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        startAutoSlide();
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        resetAutoSlide();
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        resetAutoSlide();
    };

    useEffect(() => {
        startAutoSlide();
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, []);

    const swipeHandlers = useSwipeable({
        onSwipedLeft: nextSlide,
        onSwipedRight: prevSlide,
        preventScrollOnSwipe: true,
        trackTouch: true,
    });

    return (
        <div className="slider-container" {...swipeHandlers}>
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
