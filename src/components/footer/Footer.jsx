import "./footer.css"

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footerContainer container">
                <h1 className="footerTitle">Tom Mauboussin</h1>

                <ul className="footerList">
                    <li>
                        <a href="#about" className="footerLink">About</a>
                    </li>
                    <li>
                        <a href="#skills" className="footerLink">Skills</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footerLink">Projects</a>
                    </li>
                </ul>
                <div className="footerSocial">
                    <a href="https://www.linkedin.com/in/tom-mauboussin-865760200" className="homeSocialIcon" target="_blank" rel="noreferrer">
                        <i className="uil uil-linkedin-alt"></i>
                    </a>
                    <a href="https://github.com/TomMbn" className="homeSocialIcon" target="_blank" rel="noreferrer">
                        <i className="uil uil-github-alt"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;