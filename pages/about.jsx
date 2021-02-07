import Head from 'next/head';
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faUserCog, faGlobe, faMedal, faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/About.module.scss';

function About(props) {

    return (
        <>
            <Head>
                <title>FreeC Test - About Us</title>
            </Head>

            <div className="section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className={styles.aboutContent}>
                                <h2 className={styles.aboutContentTitle}>FreeC</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ex et nisi malesuada faucibus. Aliquam est quam, varius in tincidunt sed, sollicitudin ut lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam in sem non justo mollis commodo non ut massa. Nunc sit amet pretium orci, at tincidunt arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque a auctor est, nec aliquet ipsum. Aliquam rhoncus sapien neque, vel consectetur diam pretium nec.</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <Image className={styles.aboutImage} src="/images/article.jpg" alt="FreeC" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={"section " + styles.aboutCoreValue}>
                <Container>
                    <div className="text-center">
                        <h2 className={styles.aboutCoreValueTitle}>Our Core Values</h2>
                        <p>Nullam turpis metus, semper id suscipit quis, tempus sit amet elit.</p>
                    </div>
                    <Row className="justify-content-center mt-5">
                        <Col lg={4} sm={6}>
                            <div className={styles.aboutCoreValueItem}>
                                <FontAwesomeIcon icon={faCogs} />
                                <h4 className={styles.aboutCoreValueItemTitle}>Efficient</h4>
                                <p>Donec quis nulla sed massa vestibulum mattis ac nec lorem. Aenean pharetra posuere nisl.</p>
                            </div>
                        </Col>
                        <Col lg={4} sm={6}>
                            <div className={styles.aboutCoreValueItem}>
                                <FontAwesomeIcon icon={faGlobe} />
                                <h4 className={styles.aboutCoreValueItemTitle}>Environmental</h4>
                                <p>Proin eu lacus sollicitudin, posuere massa tempus, dapibus ipsum.</p>
                            </div>
                        </Col>
                        <Col lg={4} sm={6}>
                            <div className={styles.aboutCoreValueItem}>
                                <FontAwesomeIcon icon={faMedal} />
                                <h4 className={styles.aboutCoreValueItemTitle}>Cost-Effective</h4>
                                <p>Our reliable methods help ensure clients get the most value for every project.</p>
                            </div>
                        </Col>
                        <Col lg={4} sm={6}>
                            <div className={styles.aboutCoreValueItem}>
                                <FontAwesomeIcon icon={faCheck} />
                                <h4 className={styles.aboutCoreValueItemTitle}>Safe</h4>
                                <p>Etiam iaculis semper consequat. Aliquam porta convallis venenatis.</p>
                            </div>
                        </Col>
                        <Col lg={4} sm={6}>
                            <div className={styles.aboutCoreValueItem}>
                                <FontAwesomeIcon icon={faUserCog} />
                                <h4 className={styles.aboutCoreValueItemTitle}>Creative</h4>
                                <p>Integer hendrerit egestas libero, vitae cursus nisl pretium vitae.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default About;