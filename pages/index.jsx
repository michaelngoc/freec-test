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
    const [sortBy, setSortBy] = useState(0);
    const [showItem, setShowItem] = useState(9);
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: sortBy,
        _totalPages: 1,
    });

    const getArticleApi = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/article', { method: 'GET' });
            const responseJson = await response.json();
            setArticleList(responseJson);
            setPagination({ ...pagination, _totalPages: (responseJson.length / pagination._limit) });
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
        setSortBy(sortBy);
        let tempt = [];

        if (sortBy == 0) {
            getArticleApi();
        } else if (sortBy == 1) {
            tempt = articleList.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
        } else if (sortBy == 2) {
            tempt = articleList.sort((a, b) => a.title.localeCompare(b.title));
        }

        setArticleList(tempt);
    }

    function handleShow(e) {
        const showValue = e.target.value;
        setShowItem(showValue);
        let tempt = [];

        if (showValue == 9) {
            getArticleApi();
        } else if (showValue == 1) {
            //tempt = articleList.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
        } else if (showValue == 2) {
            //tempt = articleList.sort((a, b) => a.title.localeCompare(b.title));
        }

        //setArticleList(tempt);
    }

    function showPagination() {
        var result = null;
        if (pagination._totalPages.length > 0) {
            result = Articles.map((item, index) => {
                if (item) {
                    return (
                        <li className="active">
                            <a href="#">2</a>
                        </li>
                    )
                } else {
                    return (
                        <li>
                            <a href="#">2</a>
                        </li>
                    )
                }
            });
        }
        return result;
    }

    return (
        <main>
            <Banner items={bannerList} />
            <div className="section">
                <Container>
                    <div className="sort-wrap d-flex align-items-center justify-content-between flex-wrap">
                        <div className="sort-box d-flex align-items-center flex-wrap">
                            <div className="sort-item d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                    <span>Sort by </span>
                                    <select onChange={handleSortBy} defaultValue={sortBy}>
                                        <option value="0">Default</option>
                                        <option value="1">Publish date</option>
                                        <option value="2">Title</option>
                                    </select>
                                </div>
                            </div>
                            <div className="sort-item d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                    <span>Show </span>
                                    <select onChange={handleShow} defaultValue={showItem}>
                                        <option value="9">9</option>
                                        <option value="12">12</option>
                                        <option value="24">24</option>
                                    </select>
                                </div>
                                <span>out of 40 results</span>
                            </div>
                        </div>
                        <ul className="pagination">
                            <li className="icon">
                                <a href="#"><FontAwesomeIcon icon={faAngleLeft} /></a>
                            </li>
                            {/* {showPagination} */}
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
                                    <select onChange={handleShow} defaultValue={showItem}>
                                        <option value="9">9</option>
                                        <option value="12">12</option>
                                        <option value="24">24</option>
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