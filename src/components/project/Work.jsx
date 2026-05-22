import "./work.css"
import Works from "./Works";
import { getT } from "../../utils/getTranslation";

const Work = ({ lang }) => {
    const t = getT(lang);

    return (
        <section className="work section" id="portfolio">
            <h2 className="sectionTitle">{t('projects.title')}</h2>
            <span className="sectionSubtitle">{t('projects.subtitle')}</span>
            <Works lang={lang} />
        </section>
    )
}

export default Work;