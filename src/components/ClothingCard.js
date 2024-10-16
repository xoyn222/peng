import React, { useState } from 'react';
import SliderButtons from './SliderButtons'; // Кнопки переключения
import './ClothingCard.css';

const ClothingCard = ({ clothing }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = Array.isArray(clothing.imgdata) ? clothing.imgdata : [clothing.imgdata];

    const nextSlide = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="clothing-card">
            <div className="description">
                <div className="name">{clothing.name}</div>
                <div>{clothing.description}</div>
                {clothing.sizes && (
                    <div>
                        <div className="size">Размеры:</div>
                        <div>{clothing.sizes.join(', ')}</div>
                    </div>
                )}
                {clothing.colors && (
                    <div>
                        <div className="color">Цвет:</div>
                        <div>{clothing.colors.join(', ')}</div>
                    </div>
                )}
                {clothing.material && (
                    <div>
                        <div className="material">Материал:</div>
                        <div>{clothing.material}</div>
                    </div>
                )}
                {clothing.note && <div>{clothing.note}</div>}
            </div>

            <div className="image-wrapper">
                    <img src={images[currentImageIndex]} alt={clothing.name} className="clothing-image" />

                <SliderButtons prevSlide={prevSlide} nextSlide={nextSlide} />
            </div>
        </div>
    );
};

export default ClothingCard;
