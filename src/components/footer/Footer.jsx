import "./footer.css"
import { trackExternalLink } from "../../utils/analytics";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerContainer container">
                <h2 className="footerTitle">Tom Mauboussin</h2>

                <ul className="footerList">
                    <li>
                        <a href="#home" className="footerLink">About</a>
                    </li>
                    <li>
                        <a href="#skills" className="footerLink">Skills</a>
                    </li>
                    <li>
                        <a href="#experience" className="footerLink">Experience</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footerLink">Projects</a>
                    </li>
                </ul>
                <div className="footerSocial">
                    <a
                        href="https://www.linkedin.com/in/tommauboussin"
                        aria-label="LinkedIn profile of Tom Mauboussin"
                        className="homeSocialIcon"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackExternalLink('https://www.linkedin.com/in/tommauboussin', 'LinkedIn')}
                    >
                        <i className="uil uil-linkedin-alt"></i>
                        <span className="visually-hidden">LinkedIn profile of Tom Mauboussin</span>
                    </a>
                    <a
                        href="https://github.com/TomMbn"
                        aria-label="GitHub profile of Tom Mauboussin"
                        className="homeSocialIcon"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackExternalLink('https://github.com/TomMbn', 'GitHub Profile')}
                    >
                        <i className="uil uil-github-alt"></i>
                        <span className="visually-hidden">GitHub profile of Tom Mauboussin</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;