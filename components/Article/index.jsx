import React from 'react';
import styles from './Article.module.scss';
import { Figure } from 'react-bootstrap';
import PropTypes from 'prop-types';

Article.propTypes = {
    articleItem: PropTypes.object,
};

Article.defaultProps = {
    articleItem: {},
}

function Article(props) {
    const { articleItem } = props;

    if (articleItem == {}) return false;

    return (
        <div className={styles.articleItem}>
            <Figure className={styles.articleItemImg}>
                <a href={"/article/" + articleItem.id}>
                    <Figure.Image
                        alt={articleItem.title}
                        src={articleItem.image}
                    />
                </a>
            </Figure>
            <div className={styles.articleItemContent}>
                <a className={styles.articleItemTitle} href={"/article/" + articleItem.id}><h4>{articleItem.title}</h4></a>
                <p>
                    <small>{`Publish date: ${articleItem.publishDate} - Category: ${articleItem.category}`}</small>
                </p>
                <p>
                    {articleItem.Description}
                </p>
                <p>
                    <a href={"/article/" + articleItem.id}>Learn more</a>
                </p>
            </div>
        </div>
    )
}

export default Article;