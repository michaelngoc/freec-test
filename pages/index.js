import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.scss';
import Header from '../components/Header';
import { Container, Row, Col, Figure, Jumbotron } from 'react-bootstrap';

function Home() {
    const [articleList, setArticleList] = useState([]);

    const getArticleApi = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/article', { method: 'GET' });
            const responseJson = await response.json();
            setArticleList(responseJson);
        } catch (error) {
            console.log('Failed to fetch Article list: ', error);
        }
    };

    useEffect(() => {
        getArticleApi();
    }, []);

    const showArticle = (Articles) => {
        var result = null;
        if (Articles.length > 0) {
            result = Articles.map((item, index) => {
                return (
                    <Col lg={4} md={6}>
                        <div className={styles.articleItem}>
                            <Figure>
                                <Figure.Image
                                    alt={item.title}
                                    src={item.image}
                                />
                            </Figure>
                            <Jumbotron>
                                <h4>{item.title}</h4>
                                <p>
                                    {item.Description}
                                </p>
                                <p>
                                    {item.Description}
                                </p>
                                <p>
                                    <a href={"/article/" + item.id}>Learn more</a>
                                </p>
                            </Jumbotron>
                        </div>
                    </Col>
                )
            });
        }
        return result;
    }

    return (
        <div>

            <Header />

            <main className={styles.main}>
                <Container>
                    <Row className={styles.contactInfoList + ' justify-content-center'}>
                        {showArticle(articleList)}
                    </Row>
                </Container>
            </main>
        </div>
    )
}

export default Home;