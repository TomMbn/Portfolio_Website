import React, { createContext, useState, useEffect } from 'react';
import { trackLanguageChange } from '../utils/analytics';


export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        // URL takes priority over localStorage (direct /fr/ access)
        if (window.location.pathname.startsWith('/fr')) return 'fr';
        return localStorage.getItem('language') || 'en';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
        document.documentElement.lang = language;
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prevLang => {
            const newLang = prevLang === 'en' ? 'fr' : 'en';
            trackLanguageChange(newLang);
            window.history.pushState(null, '', newLang === 'fr' ? '/fr/' : '/');
            return newLang;
        });
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
