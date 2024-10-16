import React from 'react';
import './ClothingCard.css';

const ClothingCard = ({clothing}) => {
    return (
        <div className="clothing-card">
            <div className="description">
                <div className="name">{clothing.name}</div>
                <div>{clothing.description}</div>
                {clothing.sizes && (
                    <div>
                        <div className='size'>Размеры:</div>
                        <div>
                            {clothing.sizes.map((size, index) => (
                                <div key={index}>{size}</div>
                            ))}
                        </div>
                    </div>
                )}
                {clothing.colors && (
                    <div>
                        <div className='color'>Цвет:</div>
                        <div>
                            {clothing.colors.map((color, index) => (
                                <div key={index}>{color}</div>
                            ))}
                        </div>
                    </div>
                )}
                {clothing.material && (
                    <div>
                        <div className='material'>Материал:</div>
                        <div>{clothing.material}</div>
                    </div>
                )}
                {clothing.note && (
                    <div>{clothing.note}</div>
                )}
                {clothing.tg && (
                    <div className="telegram-link">
                        <a href={`https://${clothing.tg}`} target="_blank" rel="noopener noreferrer">
                            Перейти в Telegram
                        </a>
                    </div>
                )}

            </div>
            <div className="image-wrapper">
                <img src={clothing.imgdata} alt={clothing.name} className="clothing-image"/>
            </div>
        </div>
    );
};

export default ClothingCard;
