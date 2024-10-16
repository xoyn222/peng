import React from 'react';
import './SliderButtons.css';

const SliderButtons = ({ prevSlide, nextSlide }) => {
    return (
        <div >
            <button className="slider-buttons left" onClick={prevSlide}>❮</button>
            <button className="slider-buttons right" onClick={nextSlide}>❯</button>
        </div>
    );
};

export default SliderButtons;
