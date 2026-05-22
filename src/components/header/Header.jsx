'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import "./header.css";
import { getT } from "../../utils/getTranslation";

const Header = ({ lang }) => {
    const t = getT(lang)
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".header");
            if (!header) return;
            if (window.scrollY >= 80) header.classList.add("scrollHeader");
            else header.classList.remove("scrollHeader");
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="/" className="navLogo">Tom Mauboussin</a>

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
                            <a href="#portfolio" className={activeNav === "#portfolio" ? "navLink activeLink" : "navLink"} onClick={() => setActiveNav("#portfolio")}>
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
                        <Link
                            href="/"
                            className={lang === 'en' ? 'languageOption active' : 'languageOption'}
                        >
                            EN
                        </Link>
                        <span className="languageSeparator">|</span>
                        <Link
                            href="/fr/"
                            className={lang === 'fr' ? 'languageOption active' : 'languageOption'}
                        >
                            FR
                        </Link>
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
