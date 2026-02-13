import { trackExternalLink } from "../../utils/analytics";
import Icon from "../common/Icon";

const Social = () => {
    return (
        <div className="homeSocial">
            <a
                href="https://www.linkedin.com/in/tommauboussin"
                aria-label="LinkedIn profile of Tom Mauboussin"
                className="homeSocialIcon"
                rel="noopener noreferrer"
                target="_blank"
                onClick={() => trackExternalLink('https://www.linkedin.com/in/tommauboussin', 'LinkedIn - Home')}
            >
                <Icon name="linkedin-alt" />
                <span className="visually-hidden">LinkedIn profile of Tom Mauboussin</span>
            </a>
            <a
                href="https://github.com/TomMbn"
                aria-label="GitHub profile of Tom Mauboussin"
                className="homeSocialIcon"
                rel="noopener noreferrer"
                target="_blank"
                onClick={() => trackExternalLink('https://github.com/TomMbn', 'GitHub Profile - Home')}
            >
                <Icon name="github-alt" />
                <span className="visually-hidden">GitHub profile of Tom Mauboussin</span>
            </a>
        </div>
    )
}

export default Social