import React from 'react';

import styles from './../styles/filters.module.scss';

const Filters = props => {
    
    return (
        <div>
            <span className={`${styles.menu_item} ${true ? styles.menu_item_selected : ''}`}>All Issues</span>
            <span className={styles.menu_item}>Open Issues</span>
            <span className={styles.menu_item}>Closed Issues</span>
            <span className={styles.menu_item}>Pull Requests</span>
        </div>
    );
};

export default Filters;