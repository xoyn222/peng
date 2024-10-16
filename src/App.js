import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ImageSlider from './components/ImageSlider';
import ClothingCard from './components/ClothingCard';
import ClotheData from './components/ClotheData';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Sidebar/>
                <Routes>
                    <Route path="/" element={<Navigate to="/peng" replace/>}/>

                    <Route path="/peng" element={<ImageSlider/>}/>

                    {ClotheData.map(item => (
                        <Route
                            key={item.id}
                            path={`/clothing/${item.id}`}
                            element={<ClothingCard clothing={item}/>}
                        />
                    ))}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
