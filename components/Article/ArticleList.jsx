import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Article from '.';

ArticleList.propTypes = {
    articleList: PropTypes.array,
};

ArticleList.defaultProps = {
    articleList: [],
}

function ArticleList(props) {
    const { articleList } = props;

    const showArticle = (Articles) => {
        var result = null;
        if (Articles.length > 0) {
            result = Articles.map((item, index) => {
                return (
                    <Col lg={4} md={6} key={index}>
                        <Article articleItem={item} />
                    </Col>
                )
            });
        }
        return result;
    }

    return (
        <Row>
            {showArticle(articleList)}
        </Row>
    )
}

export default ArticleList;