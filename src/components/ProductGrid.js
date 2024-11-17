import React from 'react';
import Card from './Card';
import ClotheData from './ClotheData';
import './ProductGrid.css';

const ProductGrid = () => {
    return (
        <div className="product-grid">
            {ClotheData.map((product) => (
                <Card
                    key={product.id}
                    id={product.id}  // Передаем ID
                    image={product.imgdata[0]}
                    name={product.name}
                    status={product.status}
                />
            ))}
        </div>
    );
};

export default ProductGrid;
