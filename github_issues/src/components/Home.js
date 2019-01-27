import React from 'react';

import { ReactComponent as SearchIcon } from '../icons/search.svg';
import styles from './../styles/home.module.scss';

const Home = props => {

    return (
        <div className={styles.home}>
            <span className={styles.title}>GitHub Issue Explorer</span>
            <div className={styles.form}>
                <SearchIcon className={styles.search_icon} />
                <input type="text" placeholder="Paste a link to a GitHub repo!"/>
            </div>
        </div>
    )
};

export default Home;