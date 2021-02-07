import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.scss';
import { Container } from 'react-bootstrap';
import ArticleList from '../components/Article/ArticleList';
import Banner from '../components/Banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Home() {
    const [articleList, setArticleList] = useState([]);
    const [bannerList, setBannerList] = useState([]);

    const getArticleApi = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/article', { method: 'GET' });
            const responseJson = await response.json();
            setArticleList(responseJson);
        } catch (error) {
            console.log('Failed to fetch Article list: ', error);
        }
    };

    const getBannerApi = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/banner', { method: 'GET' });
            const responseJson = await response.json();
            setBannerList(responseJson);
        } catch (error) {
            console.log('Failed to fetch Banner list: ', error);
        }
    };

    useEffect(() => {
        getArticleApi();
        getBannerApi();
    }, []);

    function handleSortBy(e) {
        const sortBy = e.target.value;
        if (sortBy == 1) {
            const tempt = articleList;
            tempt.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
            setArticleList(tempt);
            console.log(articleList);
        }
    }

    return (
        <main>
            {console.log(articleList)}
            <Banner items={bannerList} />
            <div className="section">
                <Container>
                    <div className="sort-wrap d-flex align-items-center justify-content-between flex-wrap">
                        <div className="sort-box d-flex align-items-center flex-wrap">
                            <div className="sort-item d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                    <span>Sort by </span>
                                    <select onChange={handleSortBy} defaultValue="0">
                                        <option value="0">Default</option>
                                        <option value="1">Publish date</option>
                                    </select>
                                </div>
                            </div>
                            <div className="sort-item d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                    <span>Show </span>
                                    <select defaultValue="12">
                                        <option value="12">12</option>
                                        <option value="24">24</option>
                                        <option value="36">36</option>
                                        <option value="48">48</option>
                                    </select>
                                </div>
                                <span>out of 40 results</span>
                            </div>
                        </div>
                        <ul className="pagination">
                            <li className="icon">
                                <a href="#"><FontAwesomeIcon icon={faAngleLeft} /></a>
                            </li>
                            <li className="active">
                                <a href="#">1</a>
                            </li>
                            <li>
                                <a href="#">2</a>
                            </li>
                            <li>
                                <a href="#">3</a>
                            </li>
                            <li className="icon">
                                <a href="#"><FontAwesomeIcon icon={faAngleRight} /></a>
                            </li>
                        </ul>
                    </div>
                    <ArticleList articleList={articleList} />
                    <div className="pagination-wrap d-flex align-items-center justify-content-between flex-wrap w-100">
                        <div className="sort-box d-flex align-items-center flex-wrap">
                            <div className="sort-item d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                    <span>Show </span>
                                    <select defaultValue="12">
                                        <option value="12">12</option>
                                        <option value="24">24</option>
                                        <option value="36">36</option>
                                        <option value="48">48</option>
                                    </select>
                                </div>
                                <span>out of 40 results</span>
                            </div>
                        </div>
                        <ul className="pagination">
                            <li className="icon">
                                <a href="#"><FontAwesomeIcon icon={faAngleLeft} /></a>
                            </li>
                            <li className="active">
                                <a href="#">1</a>
                            </li>
                            <li>
                                <a href="#">2</a>
                            </li>
                            <li>
                                <a href="#">3</a>
                            </li>
                            <li className="icon">
                                <a href="#"><FontAwesomeIcon icon={faAngleRight} /></a>
                            </li>
                        </ul>
                    </div>
                </Container>
            </div>
        </main>
    )
}

export default Home;