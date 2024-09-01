import React from "react";
import PageHeaderContent from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import './style.scss';
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
    { label: "Name", value: "Garima Roy" },
    { label: "Email", value: "roygarima2006@gmail.com" },
    { label: "Phone", value: "+91-9031565777" },
    { label: "Location", value: "Patna, Bihar" },
    { label: "Website", value: "www.garimaPortfolio.com" },
];

const jobSummary = "I am a Java Full Stack Developer with extensive experience in building scalable and efficient applications. My expertise includes both frontend and backend technologies, and I am passionate about creating innovative solutions.";

const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{ transform: 'translateX(-900px)', opacity: 0 }}
                        end={{ transform: 'translateX(0px)', opacity: 1 }}
                    >
                        <h3>Java Full Stack Developer</h3>
                        <p>{jobSummary}</p>
                    </Animate>

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{ transform: 'translateX(500px)', opacity: 0 }}
                        end={{ transform: 'translateX(0px)', opacity: 1 }}
                    >
                        <h3 className="personalInformationHeaderText">Personal Information</h3>
                        <ul>
                            {personalDetails.map((item, i) => (
                                <li key={i}>
                                    <span className="title">{item.label}:</span>
                                    <span className="value">{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__servicesWrapper">
                    <div className="about__content__servicesWrapper__innerContent">
                        <div><FaDev size={60} color="var(--yellow-theme-main-color)" /></div>
                        <div><DiAndroid size={60} color="var(--yellow-theme-main-color)" /></div>
                        <div><FaDatabase size={60} color="var(--yellow-theme-main-color)" /></div>
                        <div><DiApple size={60} color="var(--yellow-theme-main-color)" /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
