import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import React from "react";

function SidebarWrapper() {
    const location = useLocation();

    const textColor = location.pathname === '/' || location.pathname === '/peng' ? 'white' : 'black';
    const isVideoPage = location.pathname === '/peng'; // Проверка для VideoPage

    return <Sidebar textColor={textColor} isVideoPage={isVideoPage} />;
}

export default SidebarWrapper;
