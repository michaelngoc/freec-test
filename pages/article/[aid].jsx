import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';
import Head from 'next/head';
import ArticleDetail from '../../components/Article/ArticleDetailDetail';
import ArticleList from '../../components/Article/ArticleList';

function ArticleDetailPage() {
    const router = useRouter();
    const { aid } = router.query;

    const [articleItem, setArticleItem] = useState([]);

    const [articleRelated, setArticleRelated] = useState([]);

    const getArticleDetailApi = async () => {
        if (aid == undefined) return false;

        try {
            const response = await fetch('http://localhost:3000/api/article/' + aid, { method: 'GET' });
            const responseJson = await response.json();

            if (responseJson.category == undefined) return false;

            getArticleRelatedApi(responseJson.category);
            setArticleItem(responseJson);
        } catch (error) {
            console.log('Failed to fetch Article list: ', error);
        }
    };

    const getArticleRelatedApi = async (catId) => {
        if (catId == undefined) return false;

        try {
            const response = await fetch('http://localhost:3000/api/article/articleRelated/' + catId, { method: 'GET' });
            const responseJson = await response.json();

            setArticleRelated(responseJson);
        } catch (error) {
            console.log('Failed to fetch Article related: ', error);
        }
    };

    useEffect(() => {
        getArticleDetailApi();
    }, [aid]);

    return (
        <>
            <Head>
                <title>FreeC Test - {articleItem.title}</title>
                <meta property="og:title" content={articleItem.title} />
                <meta property="og:description" content={articleItem.Description} />
                <meta property="og:image" content={articleItem.image} />
                <meta property="og:image:alt" content={articleItem.title} />
                <meta property="og:type" content="website" />
            </Head>

            <div className="section">
                <Container>
                    <ArticleDetail articleItem={articleItem} />
                </Container>
            </div>
            <div className="section">
                <Container>
                    <h3 className="text-center mb-5">Related Article</h3>
                    <ArticleList articleList={articleRelated} />
                </Container>
            </div>
        </>
    )
}

export default ArticleDetailPage;