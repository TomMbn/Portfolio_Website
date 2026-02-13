import "./experience.css";
import { useTranslation } from "../../hooks/useTranslation";
import Icon from "../common/Icon";

const Experience = () => {
    const { t } = useTranslation();

    return (
        <section className="experience section" id="experience">
            <h2 className="sectionTitle">{t('experience.title')}</h2>
            <span className="sectionSubtitle">{t('experience.subtitle')}</span>

            <div className="experienceContainer container grid">
                <div className="experienceContent">
                    <Icon name="briefcase-alt" className="experienceIcon" />

                    <h3 className="experienceTitle">{t('experience.jobTitle')}</h3>
                    <span className="experienceSubtitle">{t('experience.company')}</span>

                    <div className="experienceDate">
                        <Icon name="calendar-alt" />
                        {t('experience.date')}
                    </div>

                    <div className="experienceDescription">
                        <div className="experienceItem">
                            <Icon name="check-circle" className="experienceItemIcon" />
                            <p>{t('experience.task1')}</p>
                        </div>
                        <div className="experienceItem">
                            <Icon name="check-circle" className="experienceItemIcon" />
                            <p>{t('experience.task2')}</p>
                        </div>
                        <div className="experienceItem">
                            <Icon name="check-circle" className="experienceItemIcon" />
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
