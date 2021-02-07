import React, { useEffect, useState } from 'react';
import List from '../List';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Footer.module.scss';
import listStyles from '../List/List.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer(props) {
    const [menusList, setMenusList] = useState([]);

    const getMenusApi = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/menus', { method: 'GET' });
            const responseJson = await response.json();
            setMenusList(responseJson);
        } catch (error) {
            console.log('Failed to fetch Menus list: ', error);
        }
    };

    useEffect(() => {
        getMenusApi();
    }, []);

    return (
        <footer className={styles.pageFooter}>
            <div className={styles.ftMain}>
                <Container>
                    <Row>
                        <Col lg={3} sm={6}>
                            <div className={styles.ftWrap}>
                                <h4>FreeC</h4>
                                <p className={styles.ftInfo}>
                                    <FontAwesomeIcon icon={faMapPin} />
									No.8 Street 66, Thao Dien, District 2, HCM
								</p>
                                <p className={styles.ftInfo}>
                                    <FontAwesomeIcon icon={faPhone} />
                                    <a href="tel:+2822534031">028-225-34031</a>
                                </p>
                                <p className={styles.ftInfo}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <a href="mailto:info@freec.asia">info@freec.asia</a>
                                </p>
                            </div>
                        </Col>
                        <Col lg={3} sm={6}>
                            <div className={styles.ftWrap}>
                                <h4>Sitemap</h4>
                                <List listClass="column-2" listItems={menusList} />
                            </div>
                        </Col>
                        <Col lg={3} sm={6}>
                            <div className={styles.ftWrap}>
                                <h4>Helpful Links</h4>
                                <List listClass="" listItems={[{
                                    "id": "1",
                                    "name": "FAQs",
                                    "alias": "#",
                                    "parent": "0",
                                    "status": true
                                },
                                {
                                    "id": "2",
                                    "name": "Privacy Policy",
                                    "alias": "#",
                                    "parent": "0",
                                    "status": true
                                },
                                {
                                    "id": "3",
                                    "name": "Terms of Use",
                                    "alias": "#",
                                    "parent": "0",
                                    "status": true
                                }]} />
                            </div>
                        </Col>
                        <Col lg={3} sm={6}>
                            <div className={styles.ftWrap}>
                                <h4>Connect With Us</h4>
                                <ul className={listStyles.listFt}>
                                    <li>
                                        <a target="_blank" className={listStyles.socialIcon} href="https://www.facebook.com/freecasiacorp/">
                                            <FontAwesomeIcon icon={faFacebookF} />Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" className={listStyles.socialIcon} href="https://www.linkedin.com/company/freecasia/">
                                            <FontAwesomeIcon icon={faLinkedinIn} />Linked In
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" className={listStyles.socialIcon} href="https://www.youtube.com/channel/UCIb1ZELs5mI5I2T5xTIB-zQ">
                                            <FontAwesomeIcon icon={faYoutube} />Youtube
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={styles.ftBot}>
                <Container>
                    <p>
                        Copyright © 2020 FreeC Asia. All Rights Reserved.
					</p>
                </Container>
            </div>
        </footer >
    );
}

export default Footer;