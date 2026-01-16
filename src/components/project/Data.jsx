import Booki from "../../assets/Resize/bookiIMG.webp";
import SophieBuel from "../../assets/Resize/SophieBuel.webp";
import NinaCarducci from "../../assets/Resize/NinaCarducci.webp";
import Kasa from "../../assets/Resize/Kasa.webp";
import VieuxGrimoire from "../../assets/Resize/VieuxGrimoire.webp";

export const getProjectsData = (t) => [
    {
        id: 1,
        image: Booki,
        title: t('projects.booki.title'),
        category: t('projects.categories.frontend'),
        github: "https://github.com/TomMbn/Project-2-HTML-CSS-",
        description: t('projects.booki.description'),
        stack: "HTML, CSS"
    },
    {
        id: 2,
        image: SophieBuel,
        title: t('projects.sophieBuel.title'),
        category: t('projects.categories.frontend'),
        github: "https://github.com/TomMbn/Project-3-OpenClassrooms-JS-",
        description: t('projects.sophieBuel.description'),
        stack: "HTML, CSS, JavaScript"
    },
    {
        id: 3,
        image: NinaCarducci,
        title: t('projects.ninaCarducci.title'),
        category: t('projects.categories.optiDebug'),
        github: "https://github.com/TomMbn/Project-5-Debug-Optimization",
        description: t('projects.ninaCarducci.description'),
        stack: "HTML, CSS, JavaScript"
    },
    {
        id: 4,
        image: Kasa,
        title: t('projects.kasa.title'),
        category: t('projects.categories.frontend'),
        github: "https://github.com/TomMbn/Projet-6---ReactJS",
        description: t('projects.kasa.description'),
        stack: "ReactJS, CSS"
    },
    {
        id: 5,
        image: VieuxGrimoire,
        title: t('projects.vieuxGrimoire.title'),
        category: t('projects.categories.backend'),
        github: "https://github.com/TomMbn/TomMbn-Projet-7---NodeJS-Express-MongoDB",
        description: t('projects.vieuxGrimoire.description'),
        stack: "NodeJS, Express, MongoDB"
    }
]

export const getProjectsCategories = (t) => [
    {
        name: t('projects.categories.all')
    },
    {
        name: t('projects.categories.frontend')
    },
    {
        name: t('projects.categories.backend')
    },
    {
        name: t('projects.categories.optiDebug')
    }
]