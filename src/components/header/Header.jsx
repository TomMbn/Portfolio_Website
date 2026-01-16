import { useState, useContext } from "react";
import "./header.css";
import { useTranslation } from "../../hooks/useTranslation";
import { LanguageContext } from "../../contexts/LanguageContext";

const Header = () => {
    const { t } = useTranslation();
    const { toggleLanguage, language } = useContext(LanguageContext);

    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80)
            header.classList.add("scrollHeader")
        else
            header.classList.remove("scrollHeader");
    });

    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="navLogo">Tom Mauboussin</a>

                <div className={Toggle ? "navMenu showMenu" : "navMenu"}>
                    <ul className="navList grid">
                        <li className="navItem">
                            <a href="#home" className={activeNav === "#home" ? "navLink activeLink" : "navLink"} onClick={() => setActiveNav("#home")}>
                                <i className="uil uil-estate navIcon"></i> {t('nav.home')}
                            </a>
                        </li>

                        <li className="navItem">
                            <a href="#home" className={activeNav === "#about" ? "navLink activeLink" : "navLink"} onClick={() => setActiveNav("#about")}>
                                <i className="uil uil-user navIcon"></i> {t('nav.about')}
                            </a>
                        </li>

                        <li className="navItem">
                            <a href="#skills" className={activeNav === "#skills" ? "navLink activeLink" : "navLink"} onClick={() => setActiveNav("#skills")}>
                                <i className="uil uil-file-alt navIcon"></i> {t('nav.skills')}
                            </a>
                        </li>

                        <li className="navItem">
                            <a href="#experience" className={activeNav === "#experience" ? "navLink activeLink" : "navLink"} onClick={() => setActiveNav("#experience")}>
                                <i className="uil uil-briefcase-alt navIcon"></i> {t('nav.experience')}
                            </a>
                        </li>

                        <li className="navItem">
                            <a href="#portfolio" className={activeNav === "#portfolio" ? "navLink activeLink" : "navLink"} onClick={() => setActiveNav("#portolio")}>
                                <i className="uil uil-scenery navIcon"></i> {t('nav.portfolio')}
                            </a>
                        </li>

                        <li className="navItem">
                            <a href="#contact" className="navLink">
                                <i className="uil uil-message navIcon"></i> {t('nav.contact')}
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times navClose" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="languageToggle">
                    <i className="uil uil-globe"></i>
                    <div className="languageOptions">
                        <span
                            className={language === 'en' ? 'languageOption active' : 'languageOption'}
                            onClick={() => language !== 'en' && toggleLanguage()}
                        >
                            EN
                        </span>
                        <span className="languageSeparator">|</span>
                        <span
                            className={language === 'fr' ? 'languageOption active' : 'languageOption'}
                            onClick={() => language !== 'fr' && toggleLanguage()}
                        >
                            FR
                        </span>
                    </div>
                </div>

                <div className="navToggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}


export default Header;