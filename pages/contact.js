import Head from 'next/head';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/Contact.module.scss';
import Header from '../components/Header';

function Contact(props) {

    return (
        <div>
            <Header />
            <Head>
                <title>FreeC Test - Contact Us</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="section">
                <Container>
                    <div className="get-in-touch">
                        <div className={styles.contactContent}>
                            <h2 className="title-2-underline-center">Get In Touch</h2>
                            <p>
                                Our multi-lingual sales team and technical experts are on hand to support you with
                                your cable projects,<br />
                                from specification through to installation. Please use the contact details below to
                                get in touch.
                            </p>
                            <Row className={styles.contactInfoList + ' justify-content-center'}>
                                <Col lg={4} md={6} className="sp-col">
                                    <div className={styles.contactInfo}>
                                        <h4>Call Us</h4>
                                        <p><a href="tel:+6564404421">(+65) 6440 4421</a></p>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} className="sp-col">
                                    <div className={styles.contactInfo}>
                                        <h4>Visit Us</h4>
                                        <p>The Spire<br />
                                        #13-04, 10 Bukit Batok Crescent<br />
                                        Singapore 658079</p>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} className="sp-col">
                                    <div className={styles.contactInfo}>
                                        <h4>Email Us</h4>
                                        <p><a href="mailto:sales@noksoffshore.com">sales@noksoffshore.com</a></p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.map + ' d-flex'}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7300877837947!2d103.75614541519809!3d1.338233199023972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da106e7a363c43%3A0x2898ab12d478c7b4!2s10%20Bukit%20Batok%20Cres%2C%20Singapore%20658079!5e0!3m2!1sen!2s!4v1611656058466!5m2!1sen!2s"
                                allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Contact;