import React, {useState, useEffect} from 'react';
import './ImageSlider.css';
import {assets} from "../assets/assets.js";

const images = [
    {src: assets.image1, caption: 'девушка в <a href="/clothing/3">Худи Пенг «Ахуенный тренд»</a>'},
    {src: assets.image2, caption: 'девушка в <a href="/clothing/2">Худи Пенг «Ахуенный тренд»</a>'},
    {src: assets.image3, caption: 'девушка в <a href="/clothing/6">Худи Пенг «Ахуенный тренд»</a>'},
    {src: assets.image4, caption: 'девушка в <a href="/clothing/4">Худи Пенг «Ахуенный тренд»</a>'},
    {src: assets.image5, caption: 'девушка в <a href="/clothing/5">Худи Пенг «Ахуенный тренд»</a>'},
    {src: assets.image6, caption: 'девушка в <a href="/clothing/1">Худи Пенг «Ахуенный тренд»</a>'},
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
            <div className="slider-caption" dangerouslySetInnerHTML={{__html: images[currentIndex].caption}}></div>
        </div>
    );
};

export default ImageSlider;
