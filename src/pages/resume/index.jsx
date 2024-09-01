import React from "react";
import PageHeaderContent from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { data } from "./utils";
import './style.scss'

const Resume = () => {
    return (
        <section id="resume" className="resume">
            <PageHeaderContent
                headerText="My Resume"
                icon={<BsInfoCircleFill size={40} />}
            />

            <div className="timeline">
                <div className="timeline__experience">
                    <h3 className="timeline__experience__header-text">
                        Education
                    </h3>
                    <VerticalTimeline
                        layout={'1-column'}
                        lineColor="var(--yellow-theme-main-color)"
                    >
                        {
                            Array.isArray(data.education) ? (
                                data.education.map((item, i) => (
                                    <VerticalTimelineElement
                                        key={i}
                                        className="timeline__experience__vertical-timeline-element"
                                    >
                                        <div className="vertical-timeline-element-title-wrapper">
                                            <h3 className="vertical-timeline-element-title">
                                                {item.title}
                                            </h3>
                                            <h4 className="vertical-timeline-element-subtitle">
                                                {item.subTitle}
                                            </h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </VerticalTimelineElement>
                                ))
                            ) : (
                                <p>No education data available.</p>
                            )
                        }
                    </VerticalTimeline>
                </div>
                
            </div>
        </section>
    )
}

export default Resume;
