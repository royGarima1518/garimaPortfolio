import React from "react";
import { useNavigate } from 'react-router-dom';
import './style.scss';
import { Animate } from "react-simple-animate";
import { FaLinkedin, FaGithub, FaMailBulk,  } from 'react-icons/fa';
import { SiLeetcode, SiCodingninjas } from 'react-icons/si';

const Home = () => {
    const navigate = useNavigate();

    const handleNavigateToContactMePage = () => {
        navigate("/contact");
    };

    return (
        <section id="home" className="home">
            <div className="home__text-wrapper">
                <Animate
                    play
                    duration={1.5}
                    delay={0.5}
                    start={{
                        transform: 'translateY(50px)',
                        opacity: 0
                    }}
                    end={{
                        transform: 'translateY(0)',
                        opacity: 1
                    }}>
                    <h1>
                        Hello, I'm Garima Roy!
                        <br />
                        Java Full Stack Developer
                    </h1>
                </Animate>
            </div>

            <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                    transform: 'translateY(550px)',
                    opacity: 0
                }}
                end={{
                    transform: 'translateY(0)',
                    opacity: 1
                }}>
                <div className="home__contact-me">
                    <button onClick={handleNavigateToContactMePage}>Hire Me</button>
                </div>
            </Animate>

            <div className="home__social-links">
                <a href="https://leetcode.com/u/rg1527/" target="_blank" rel="noopener noreferrer" className="icon">
                    <SiLeetcode />
                </a>
                <a href="https://www.naukri.com/code360/profile/roygarima" target="_blank" rel="noopener noreferrer" className="icon">
                    <SiCodingninjas />
                </a>
                <a href="https://github.com/royGarima1518" target="_blank" rel="noopener noreferrer" className="icon">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/roygarima/" target="_blank" rel="noopener noreferrer" className="icon">
                    <FaLinkedin />
                </a>
                <a href="mailto:roygarima2006@gmail.com" className="icon">
                    <FaMailBulk />
                </a>
            </div>
        </section>
    );
};

export default Home;
