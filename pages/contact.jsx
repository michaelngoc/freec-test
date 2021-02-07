import Head from 'next/head';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/Contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact(props) {

    return (
        <div>
            <Head>
                <title>FreeC Test - Contact Us</title>
            </Head>

            <div className="section">
                <Container>
                    <div className="get-in-touch">
                        <div className={styles.contactContent}>
                            <h2 className="title-2-underline-center">Get In Touch</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ex et nisi malesuada faucibus. Aliquam est quam, varius in tincidunt sed, sollicitudin ut lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam in sem non justo mollis commodo non ut massa.
                            </p>
                            <Row className={styles.contactInfoList + ' justify-content-center'}>
                                <Col lg={4} md={6} className="sp-col">
                                    <div className={styles.contactInfo}>
                                        <FontAwesomeIcon icon={faPhone} />
                                        <h4>Call Us</h4>
                                        <p><a href="tel:+2822534031">028-225-34031</a></p>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} className="sp-col">
                                    <div className={styles.contactInfo}>
                                        <FontAwesomeIcon icon={faMapPin} />
                                        <h4>Visit Us</h4>
                                        <p>No.8 Street 66, Thao Dien, District 2, HCM</p>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} className="sp-col">
                                    <div className={styles.contactInfo}>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        <h4>Email Us</h4>
                                        <p><a href="mailto:info@freec.asia">info@freec.asia</a></p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.map + ' d-flex'}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3918.9652493772!2d106.7249725!3d10.8139713!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317526213b32706d%3A0x3b686e55732fa5b5!2zOCDEkC4gU-G7kSA2NiwgVGjhuqNvIMSQaeG7gW4sIFF14bqtbiAyLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1sen!2s!4v1612717710975!5m2!1sen!2s" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Contact;