import React, {useEffect, useState} from 'react';
import './Sidebar.css';

const Sidebar = ({ textColor }) => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatDateTime = (date) => {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        };

        let formattedDate = date.toLocaleDateString('ru-RU', options);

        formattedDate = formattedDate
            .replace(/,/g, '')
            .replace(/\./g, '')
            .replace(/\sг$/, '')
            .replace(/(^|\\s)\\S/g, (l) => l.toUpperCase());

        return formattedDate;
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        });
    };

    return (
        <div className="sidebar" style={{ color: textColor }}>
            <div className="info">
                <div className="info-links">
                    <a href="https://t.me/peng0256" target="_blank" rel="noopener noreferrer">
                        t.me/peng0256
                    </a>
                    <a href="https://instagram.com/peng0256.png" target="_blank" rel="noopener noreferrer">
                        inst/peng0256.png
                    </a>
                </div>
                <div className="info-pages">
                    <a href="/" rel="noopener noreferrer">-главная</a>
                    <a href="/shop" rel="noopener noreferrer">-предметы</a>
                    <a href="/" rel="noopener noreferrer">-галерея</a>
                </div>
            </div>
            <div className="date">{formatDateTime(currentDateTime)} {formatTime(currentDateTime)}</div>
        </div>
    );
};


export default Sidebar;
