import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ImageSlider from './components/ImageSlider';
import ClothingCard from './components/ClothingCard';
import ClotheData from './components/ClotheData';
import './App.css';
import ProductGrid from './components/ProductGrid';

function SidebarWrapper() {
    const location = useLocation();

    const textColor = location.pathname === '/' ? 'white' : 'black';

    return <Sidebar textColor={textColor} />;
}

function App() {
    return (
        <Router>
            <div className="App">
                <SidebarWrapper />
                <Routes>
                    <Route path="/" element={<ImageSlider />} />
                    <Route path="/shop" element={<ProductGrid />} />
                    {ClotheData.map((item) => (
                        <Route
                            key={item.id}
                            path={`/clothing/${item.id}`} // Динамический путь с ID
                            element={<ClothingCard clothing={item} />}
                        />
                    ))}
                </Routes>
            </div>
        </Router>
    );
}

export default App;