import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import './style.scss';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        alert('Form submitted!');
    };

    return (
        <section id="contact" className="contact">
            <PageHeaderContent
                headerText="Contact Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="contact__content">
                <form className="contact__form" onSubmit={handleSubmit}>
                    <h3 className="contact__form__title">Get in Touch</h3>
                    <div className="contact__form__input-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="contact__form__input-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div className="contact__form__input-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            rows="5"
                            required
                        />
                    </div>
                    <button type="submit" className="contact__form__submit">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
