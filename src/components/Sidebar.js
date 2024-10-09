import React, { useState, useEffect } from 'react';
import './Sidebar.css';

const Sidebar = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000); // Обновляем каждую секунду

        return () => clearInterval(interval); // Очищаем интервал при размонтировании
    }, []);

    const formatDateTime = (date) => {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        };

        const formattedDate = date.toLocaleDateString('en-US', options);
        return formattedDate.replace(/,/g, ''); // Убираем запятые
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false, // Отключаем 12-часовой формат, чтобы было 24-часовое время
        });
    };

    return (
        <div className="sidebar">
            <div className="info">
                <a href="https://t.me/peng0256" target="_blank" rel="noopener noreferrer">t.me/peng0256</a>
                <a href="https://instagram.com/peng0256.png" target="_blank" rel="noopener noreferrer">inst/peng0256.png</a>
            </div>
            <div className="date">{formatDateTime(currentDateTime)} {formatTime(currentDateTime)}</div>
        </div>
    );
};

export default Sidebar;
