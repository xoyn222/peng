// src/components/ImageSlider.js
import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const images = [
    { src: '/images/IMG_1810.JPG', caption: 'девушка в <a href="/clothing/3">Худи Пенг «Ахуенный тренд»</a>'},
    { src: '/images/IMG_2554.JPG', caption: 'девушка в <a href="/clothing/2">Худи Пенг «Ахуенный тренд»</a>'},
    { src: '/images/IMG_2038.JPG', caption: 'девушка в <a href="/clothing/6">Худи Пенг «Ахуенный тренд»</a>'},
    { src: '/images/IMG_2102.JPG', caption: 'девушка в <a href="/clothing/4">Худи Пенг «Ахуенный тренд»</a>'},
    { src: '/images/IMG_2486.JPG', caption: 'девушка в <a href="/clothing/5">Худи Пенг «Ахуенный тренд»</a>'},
    { src: '/images/IMG_2218.JPG', caption: 'девушка в <a href="/clothing/1">Худи Пенг «Ахуенный тренд»</a>'},
];

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
                <img src={images[currentIndex].src} alt={`Slide ${currentIndex + 1}`} className="slider-image"/>
                <button className="slider-button left" onClick={prevSlide}>❮</button>
                <button className="slider-button right" onClick={nextSlide}>❯</button>
            </div>
            <div className="slider-caption" dangerouslySetInnerHTML={{ __html: images[currentIndex].caption }}></div>
        </div>
    );
};

export default ImageSlider;
