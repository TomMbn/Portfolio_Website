import "./experience.css";

const Experience = () => {
    return (
        <section className="experience section" id="experience">
            <h2 className="sectionTitle">Experience</h2>
            <span className="sectionSubtitle">My professional journey</span>

            <div className="experienceContainer container grid">
                <div className="experienceContent">
                    <i className="uil uil-briefcase-alt experienceIcon"></i>

                    <h3 className="experienceTitle">Full Stack Developer</h3>
                    <span className="experienceSubtitle">Izentit - Trélazé</span>

                    <div className="experienceDate">
                        <i className="uil uil-calendar-alt"></i>
                        2024 - Present (Apprenticeship)
                    </div>

                    <div className="experienceDescription">
                        <div className="experienceItem">
                            <i className="uil uil-check-circle experienceItemIcon"></i>
                            <p>Backend Development with Laravel & MySQL.</p>
                        </div>
                        <div className="experienceItem">
                            <i className="uil uil-check-circle experienceItemIcon"></i>
                            <p>Docker Container Management & CI/CD with GitLab.</p>
                        </div>
                        <div className="experienceItem">
                            <i className="uil uil-check-circle experienceItemIcon"></i>
                            <p>Collaborative work using Agile Methodology.</p>
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
