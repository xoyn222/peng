// src/components/ClothingCard.js
import React from 'react';
import './ClothingCard.css';

const ClothingCard = ({ clothing }) => {
    return (
        <div className="clothing-card">
            <div className="description">
                <h2>{clothing.name}</h2>
                <p>{clothing.somedata}</p>
            </div>
            <div className="image-wrapper">
                <img src={clothing.imgdata} alt={clothing.name} className="clothing-image" />
            </div>
        </div>
    );
};

export default ClothingCard;
