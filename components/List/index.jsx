import React from 'react';
import styles from './List.module.scss';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

List.propTypes = {
    listItems: PropTypes.array,
    listClass: PropTypes.string,
};

List.defaultProps = {
    listItems: [],
    listClass: "",
}

function List(props) {
    const { listItems, listClass } = props;
    const { asPath } = useRouter();

    const showItems = (Items) => {
        var result = null;
        if (Items.length > 0) {
            result = Items.map((item, index) => {

                if (asPath === item.alias) {
                    return (
                        <li key={index} className={styles.active}>
                            <a href={item.alias} dangerouslySetInnerHTML={{ __html: item.name }} />
                        </li>
                    )
                } else {
                    return (
                        <li key={index}>
                            <a href={item.alias} dangerouslySetInnerHTML={{ __html: item.name }} />
                        </li>
                    )
                }

            });
        }
        return result;
    }
    return (
        <ul className={styles.listFt + " " + listClass}>
            {showItems(listItems)}
        </ul>
    );
}

export default List;