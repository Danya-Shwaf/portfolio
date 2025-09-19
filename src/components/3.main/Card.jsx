import "./main.css";
import PropTypes from 'prop-types';

function Card({filter}) {
    let projectsArray = [
        {
            category : "react",
            projects : [
            {
                title: "E_planet Shopping",
                img: '/images/planet shopping.png',
                tech: "react redux css",
                information: "The application is an online plant shopping platform, consisting of three main pages: About Us page Plants Display page Shopping Cart page.",
                github: "https://github.com/Danya-Shwaf/e-plantShopping.git",
                live: "https://e-plant-shopping-eq9g.vercel.app/"
            },
        ]},
        {
            category : "javascript",
            projects : [
                {
                    title: "Social Media Web",
                    img: "/images/social media web.png",
                    tech: "html css js axios",
                    information: "An open-source social networking platform utilizing APIs to connect users and provide an innovative interactive social experience.",
                    github: "https://github.com/Danya-Shwaf/social_media_web.git",
                    live: "https://social-media-web-uans.vercel.app/"
                },
                {
                    title: "City Prayer Times",
                    img: "/images/prayer time cities.png",
                    tech: "html css js api",
                    information: "A web applications that displays prayer times based on the selected city using a prayer times API",
                    github: "https://github.com/Danya-Shwaf/city_prayer_times.git",
                    live: "https://social-media-web-c5rb.vercel.app/"
                },
                {
                    title: "Contact Form",
                    img: "/images/contact form.png",
                    tech: "html css js",
                    information: "The Contact Form project is an interactive form built with HTML, CSS, and JavaScript to collect user information. It allows users to easily submit their name, email, and message.",
                    github:"https://github.com/Danya-Shwaf/Danya-Shwaf.github.io/tree/main/contact-form",
                    live: ""
                }
            ]
        },
        {
            category : "HTML && CSS",
            projects : [{
                title: "Telegram Page",
                img: "/images/tele page.png",
                tech: "html css",
                information: "The Tele-Page project is a static webpage built using HTML and Tailwind CSS. It features a clean and organized design.The layout is fully responsive, ensuring compatibility across various screen sizes.",
                github: "https://github.com/Danya-Shwaf/Danya-Shwaf.github.io/tree/main/Tele-page",
                live: "https://telegram-page-dun.vercel.app/"
            },
            {
                title: "Template One",
                img: "/images/template one.png",
                tech: "html tailwaindcss",
                information: "The Template-One project is a static webpage built with HTML and CSS. It features a clean, responsive design, ideal for personal or business websites.",
                github: "https://github.com/Danya-Shwaf/Danya-Shwaf.github.io/tree/main/Template-One",
                live: "https://danya-shwaf.github.io/Template-One/"
            },
            {
                title: "Template Two",
                img: "/images/template two.png",
                tech: "html css",
                information: "The Template-Two project is a static webpage built with HTML and CSS. It offers a simple, elegant, and responsive design, suitable for personal or business websites.",
                github: "https://github.com/Danya-Shwaf/Danya-Shwaf.github.io/tree/main/Template-Two",
                live: "https://danya-shwaf.github.io/Template-Two/"
            },
            ]
        },
    ];

let displayedProjects = [];
    
    if (filter === "all") {
        // Get all projects from all categories
        projectsArray.forEach(category => {
            displayedProjects = [...displayedProjects, ...category.projects];
        });
    } else {
        // Get projects from specific category
        const categoryProjects = projectsArray.find(item => item.category === filter);
        displayedProjects = categoryProjects ? categoryProjects.projects : [];
    }
    return (
        <section className="right_section">
            <div className="card_container">
                {displayedProjects.map((project,index) => (
                <div className="card" key={index}>
                    <img src={project.img} alt={project.title} />
                    <div className="box">
                        <h3>{project.title}</h3>
                        <p>{project.information}</p>
                        <hr/>
                        <ul className="links">
                            <li><a href={project.github} className="icon-github"></a></li>
                            <li><a href={project.live} className="live">Live Demo</a></li>
                        </ul>
                    </div>
                </div>
                ))}
            </div>
        </section>
    )
}

Card.propTypes = {
    filter: PropTypes.string.isRequired
};

export default Card;
