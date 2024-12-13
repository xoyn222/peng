import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import ImageSlider from './components/ImageSlider';
import ClothingCard from './components/ClothingCard';
import ProductGrid from './components/ProductGrid';
import SidebarWrapper from './components/SidebarWrapper';
import VideoPage from "./components/VideoPage";


import ClotheData from './components/ClotheData';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <SidebarWrapper />
                <Routes>
                    <Route path="*" element={<Navigate to="/" replace />} />
                    <Route path="/" element={<ImageSlider />} />
                    <Route path="/peng" element={<VideoPage />} />
                    <Route path="/shop" element={<ProductGrid />} />
                    {ClotheData.map((item) => (
                        <Route
                            key={item.id}
                            path={`/clothing/${item.id}`}
                            element={<ClothingCard clothing={item} />}
                        />
                    ))}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
