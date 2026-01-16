import "./experience.css";
import { useTranslation } from "../../hooks/useTranslation";

const Experience = () => {
    const { t } = useTranslation();

    return (
        <section className="experience section" id="experience">
            <h2 className="sectionTitle">{t('experience.title')}</h2>
            <span className="sectionSubtitle">{t('experience.subtitle')}</span>

            <div className="experienceContainer container grid">
                <div className="experienceContent">
                    <i className="uil uil-briefcase-alt experienceIcon"></i>

                    <h3 className="experienceTitle">{t('experience.jobTitle')}</h3>
                    <span className="experienceSubtitle">{t('experience.company')}</span>

                    <div className="experienceDate">
                        <i className="uil uil-calendar-alt"></i>
                        {t('experience.date')}
                    </div>

                    <div className="experienceDescription">
                        <div className="experienceItem">
                            <i className="uil uil-check-circle experienceItemIcon"></i>
                            <p>{t('experience.task1')}</p>
                        </div>
                        <div className="experienceItem">
                            <i className="uil uil-check-circle experienceItemIcon"></i>
                            <p>{t('experience.task2')}</p>
                        </div>
                        <div className="experienceItem">
                            <i className="uil uil-check-circle experienceItemIcon"></i>
                            <p>{t('experience.task3')}</p>
                        </div>
                    </div>

                    <div className="experienceTechStack">
                        <span className="techBadge">Laravel</span>
                        <span className="techBadge">MySQL</span>
                        <span className="techBadge">Docker</span>
                        <span className="techBadge">GitLab</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
