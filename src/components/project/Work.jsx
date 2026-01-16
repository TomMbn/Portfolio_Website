import "./work.css"
import Works from "./Works";
import { useTranslation } from "../../hooks/useTranslation";

const Work = () => {
    const { t } = useTranslation();

    return (
        <section className="work section" id="portfolio">
            <h2 className="sectionTitle">{t('projects.title')}</h2>
            <span className="sectionSubtitle">{t('projects.subtitle')}</span>
            <Works />
        </section>
    )
}

export default Work;