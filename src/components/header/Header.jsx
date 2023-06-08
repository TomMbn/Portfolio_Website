import { useState } from "react";
import "./header.css";

const Header = () => {
    window.addEventListener("scroll", function() {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) 
            header.classList.add("scrollHeader")
        else
            header.classList.remove("scrollHeader");
    });

    const[Toggle, showMenu] = useState(false);
    const[activeNav, setActiveNav]= useState("#home");

    return(
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="navLogo">Tom Mauboussin</a>

                <div className={Toggle ? "navMenu showMenu" : "navMenu"}>
                    <ul className="navList grid">
                        <li className="navItem">
                            <a href="#home" className={activeNav === "#home" ? "navLink activeLink" : "navLink"} onClick={() => setActiveNav("#home")}>
                                <i className="uil uil-estate navIcon"></i> Home
                            </a>
                        </li>

                        <li className="navItem">
                            <a href="#about" className={activeNav === "#about" ? "navLink activeLink" : "navLink"} onClick={() => setActiveNav("#about")}>
                                <i className="uil uil-user navIcon"></i> About
                            </a>
                        </li>

                        <li className="navItem">
                            <a href="#skills" className={activeNav === "#skills" ? "navLink activeLink" : "navLink"} onClick={() => setActiveNav("#skills")}>
                                <i className="uil uil-file-alt navIcon"></i> Skills
                            </a>
                        </li>                      

                        <li className="navItem">
                            <a href="#portfolio" className={activeNav === "#portfolio" ? "navLink activeLink" : "navLink"} onClick={() => setActiveNav("#portolio")}>
                                <i className="uil uil-scenery navIcon"></i> Portfolio
                            </a>
                        </li>

                        <li className="navItem">
                            <a href="#contact" className="navLink">
                                <i className="uil uil-message navIcon"></i> Contact
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times navClose" onClick={()=> showMenu(!Toggle)}></i>
                </div>

                <div className="navToggle" onClick={()=> showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}


export default Header;