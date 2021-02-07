import React from 'react';
import PropTypes from 'prop-types';
import { Image, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './Article.module.scss';

ArticleDetail.propTypes = {
    articleItem: PropTypes.object,
};

ArticleDetail.defaultProps = {
    articleItem: {},
}

function ArticleDetail(props) {
    const { articleItem } = props;

    if (articleItem == {}) return false;

    function showItem(items, alt) {
        var result = null;

        result = items.map((item, index) => {
            return (
                <Carousel.Item key={index}>
                    <Image src={item} alt={alt} />
                </Carousel.Item>
            )
        });

        return result;
    }

    function showArticleImage(items, alt) {
        if (items === undefined) return false;

        var result = null;

        if (items.length > 1) {
            result = <Carousel>
                {showItem(items, alt)}
            </Carousel>
        } else if (items.length > 0) {
            result = <Image src={items[0]} alt={alt} />
        }

        return result;
    }

    return (
        <>
            <div className={styles.articleDetailHead}>
                <h1 className={styles.articleDetailTitle}>{articleItem.title}</h1>
                <p className={styles.articleDetailDate}>Category: {articleItem.category}</p>
                <p className={styles.articleDetailDate}><FontAwesomeIcon icon={faCalendarAlt} />{articleItem.publishDate}</p>
            </div>
            {showArticleImage(articleItem.imageDetail, articleItem.title)}
            <div className={styles.articleDetailContent} dangerouslySetInnerHTML={{ __html: articleItem.MainInfo }} />
        </>
    )
}

export default ArticleDetail;