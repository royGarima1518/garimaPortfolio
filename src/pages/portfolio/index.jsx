import React, { useState } from 'react';
import PageHeaderContent from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from 'react-simple-animate';
import TaketestImage from '../../pages/portfolio/Taketest.png';
import UChatImage from '../../pages/portfolio/Uchat.png';
import CarImage from '../../pages/portfolio/Car.jpg';
import agriculture from '../portfolio/agriculture.jpg';
import BlinkNameVideo from '../../pages/portfolio/BlinkName.mp4'; // Import the video
import './style.scss';

const projects = [
    {
        title: "Assessment Portal",
        description: "TakeTest is a web-based assessment portal developed with Java, JSP, MySQL, and more. It offers features like full-screen mode, webcam monitoring, and time-based test attempts for objective-type tests.",
        category: "Java Full Stack",
        image: TaketestImage,
        github: "https://github.com/royGarima1518/Assessment-Portal",
        technologies: ["Java", "JSP", "MySQL", "JDBC", "Apache Tomcat", "Eclipse IDE"]
    },
    {
        title: "UChat",
        description: "UChat is a fun and interactive MERN stack chat app that supports multi-user conversations, profile customization, and extensive emoji use.",
        category: "Web Development",
        image: UChatImage,
        github: "https://github.com/royGarima1518/UChat",
        technologies: ["ReactJS", "JavaScript", "Redux", "MaterialUI", "TailWindCSS", "Node.js", "Express", "MongoDB"]
    },
    {
        title: "Car Residency",
        description: "Developed a monetization strategy by charging for parked cars and providing real-time availability updates to drivers, reducing traffic congestion and enhancing the parking experience.",
        category: "Web Development",
        image: CarImage,
        github: "https://github.com/royGarima1518/Car-Residency",
        technologies: ["HTML", "CSS", "Node.js", "Express", "MongoDB", "Body-parser"]
    },
    {
        title: "Smart-Agriculture System",
        description: "The Smart Agriculture System monitors temperature, humidity, and other critical factors to optimize farming conditions.",
        category: "Web Development",
        image: agriculture,
        github: "https://github.com/royGarima1518/Smart-Agriculture-Monitoring-System",
        technologies: ["Arduino IDE", "C"]
    }
];

const Portfolio = () => {
    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All' 
        ? projects 
        : projects.filter(project => project.category === filter);

    return (
        <section id="portfolio" className="portfolio">
            <PageHeaderContent
                headerText="My Portfolio"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="portfolio__content">
                <div className="portfolio__filters">
                    {['All', 'Web Development', 'Java Full Stack', 'Design'].map(cat => (
                        <button
                            key={cat}
                            className={`filter-button ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <div className="portfolio__projects">
                    {filteredProjects.map((project, i) => (
                        <Animate
                            key={i}
                            play
                            duration={0.8}
                            start={{ opacity: 0, transform: 'translateY(30px)' }}
                            end={{ opacity: 1, transform: 'translateY(0)' }}
                        >
                            <div 
                                className="portfolio__project-card"
                                onClick={() => window.open(project.github, "_blank")}
                            >
                                <img src={project.image} alt={project.title} />
                                <div className="portfolio__project-card__info">
                                    <h4>{project.title}</h4>
                                    <p>{project.description}</p>
                                    <div className="portfolio__project-card__tech">
                                        {project.technologies.map((tech, idx) => (
                                            <span key={idx} className="tech-badge">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <span className="portfolio__project-card__link">View on GitHub</span>
                                </div>
                            </div>
                        </Animate>
                    ))}
                </div>
                {/* New Highlights Section */}
                <div className="portfolio__highlights">
                    <div className="highlight__video">
                        <h2>Featured Video</h2>
                        <video controls>
                            <source src={BlinkNameVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="highlight__blinkname">
                        <h2 className="blink-text">Blinking System</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
