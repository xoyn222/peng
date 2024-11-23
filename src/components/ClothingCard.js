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
            <div className="card-wrapper">
                <img src={images[currentImageIndex]} alt={clothing.name} className="clothing-image" />
                <SliderButtons prevSlide={prevSlide} nextSlide={nextSlide} />
            </div>

            <div className="description">
                <div className="name">{clothing.name}</div>
                <div className="price">{clothing.price}</div>
                <button className="status-button"><a href={clothing.tg} target="_blank" rel="noopener noreferrer">Связаться
                    в Telegram</a></button>

                <div className="details">
                    {clothing.description && <div>{clothing.description}</div>}

                    {clothing.sizes && (
                        <div>
                            <div className="size">Размеры:</div>
                            <div className="size-list">
                                {clothing.sizes.map((size, index) => (
                                    <div key={index} className="size-item">{size}</div>
                                ))}
                            </div>
                        </div>
                    )}

                    {clothing.material && (
                        <div>
                            <div className="material">Материал:</div>
                            <div>{clothing.material}</div>
                        </div>
                    )}
                </div>

                {clothing.note && <div className="note">{clothing.note}</div>}
                {clothing.tg && (
                    <div className="telegram-link">

                    </div>
                )}
            </div>
        </div>
    );
};

export default ClothingCard;
