import Booki from "../../assets/bookiIMG.PNG";
import SophieBuel from "../../assets/SophieBuel.PNG";
import NinaCarducci from "../../assets/NinaCarducci.PNG";
import Kasa from "../../assets/Kasa.PNG";
import VieuxGrimoire from "../../assets/VieuxGrimoire.PNG";

export const projectsData = [
    {
        id: 1,
        image: Booki,
        title: "Booki",
        category: "Frontend", 
        github: "https://github.com/TomMbn/Project-2-HTML-CSS-",
        description: "For this project, I created the homepage of Booki, a travel agency. The homepage allows users to view available accommodations in a chosen city and also explore the activities to do in that city. In this case, my task was limited to integration, so the user cannot select a specific city, the default city is Marseille",
        stack: "HTML, CSS"
    },
    {
        id: 2,
        image: SophieBuel,
        title: "Sophie Buel",
        category: "Frontend", 
        github: "https://github.com/TomMbn/Project-3-OpenClassrooms-JS-",
        description: "This website is the online portfolio of Sophie Buel, an interior designer. The site allows her to showcase her work and also provides her with the ability to add new projects or remove existing ones by logging in and accessing an editing mode.",
        stack: "HTML, CSS, JavaScript"
    },
    {
        id: 3,
        image: NinaCarducci,
        title: "Nina Carducci",
        category: "Opti/Debug", 
        github: "https://github.com/TomMbn/Project-5-Debug-Optimization",
        description: "This website is the online portfolio of Nina Carducci, a photographer. The work I have done involved optimizing the site for SEO, accessibility, and performance, as well as debugging certain functionalities.",
        stack: "HTML, CSS, JavaScript"
    },
    {
        id: 4,
        image: Kasa,
        title: "Kasa",
        category: "Frontend", 
        github: "https://github.com/TomMbn/Projet-6---ReactJS",
        description: "Kasa is a real estate rental application that allows users to see all available accommodations, as well as view each specific property to obtain more information about it.",
        stack: "ReactJS, CSS"
    },
    {
        id: 5,
        image: VieuxGrimoire,
        title: "Mon Vieux Grimoire",
        category: "Backend", 
        github: "https://github.com/TomMbn/TomMbn-Projet-7---NodeJS-Express-MongoDB",
        description: "Mon Vieux Grimoire is a book rating website that allows users to create an account, log in, add a book, edit it, delete it, and rate the books added by other users.",
        stack: "NodeJS, Express, MongoDB"
    }

]

export const projectsCategories = [
    {
        name: "all"
    },
    {
        name: "Frontend"
    },
    {
        name: "Backend"
    },
    {
        name: "Opti/Debug"
    }
]