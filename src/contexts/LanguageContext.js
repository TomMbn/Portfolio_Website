import React, { createContext, useState, useEffect } from 'react';
import { trackLanguageChange } from '../utils/analytics';


export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // Default language is English
    const [language, setLanguage] = useState(() => {
        const savedLanguage = localStorage.getItem('language');
        return savedLanguage || 'en';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prevLang => {
            const newLang = prevLang === 'en' ? 'fr' : 'en';
            trackLanguageChange(newLang);
            return newLang;
        });
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
