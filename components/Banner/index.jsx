import React from 'react';
import PropTypes from 'prop-types';
import styles from './Banner.module.scss';
import { Image, Carousel } from 'react-bootstrap';

Banner.propTypes = {
    items: PropTypes.array,
};

Banner.defaultProps = {
    items: [
        {
            image: '',
            title: '',
            text: '',
            linkHref: '',
            linkTxt: '',
        },
    ],
}

function Banner(props) {
    const { items } = props;

    function showBannerItem(items) {
        var result = null;

        result = items.map((item, index) => {
            return (
                <Carousel.Item key={index}>
                    <Image className={styles.bannerImage} src={item.image} alt={item.title} />
                    <Carousel.Caption className={styles.bannerCaption}>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        });

        return result;
    }

    function showBanner(items) {
        var result = null;

        result = <Carousel className={styles.bannerSlider}>
            {showBannerItem(items)}
        </Carousel>

        return result;
    }

    return (
        <div className="banner">
            {showBanner(items)}
        </div>
    );
}

export default Banner;