import { useContext, useCallback } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../translations';

export const useTranslation = () => {
    const { language } = useContext(LanguageContext);

    const t = useCallback((key) => {
        const keys = key.split('.');
        let value = translations[language];

        for (const k of keys) {
            value = value[k];
            if (!value) return key;
        }

        return value;
    }, [language]);

    return { t, language };
};
