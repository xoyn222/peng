import React from 'react';
import { Link } from 'react-router-dom';  // Импортируем Link
import './Card.css';

const Card = ({ image, name, status, id }) => {
    return (
        <Link to={`/clothing/${id}`} className="product-card"> {/* Добавляем Link и передаем ID */}
            <div className="product-image">
                <img src={image} alt={name} />
            </div>
            <div className="product-info">
                <p className="product-name">{name}</p>
                <p className="product-status">{status}</p>
            </div>
        </Link>
    );
};

export default Card;
