import React from 'react';

import styles from './../styles/tag.module.scss';

const Tag = props => {

    return (
        <div className={styles.tag_wrapper}>
            <span className={styles.tag_text}>{ props.tag }</span>
        </div>
    );
};

export default Tag;