import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ImageSlider from './components/ImageSlider';
import ClothingCard from './components/ClothingCard';
import ClotheData from './components/ClotheData';
import './App.css';
import ProductGrid from './components/ProductGrid';

function App() {
    return (
        <Router>
            <div className="App">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<ImageSlider />} />
                    <Route path="/shop" element={<ProductGrid />} />
                    {ClotheData.map(item => (
                        <Route
                            key={item.id}
                            path={`/clothing/${item.id}`}  // Динамический путь с ID
                            element={<ClothingCard clothing={item} />}
                        />
                    ))}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
