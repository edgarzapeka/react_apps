import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { ReactComponent as SearchIcon } from '../icons/search.svg';
import styles from './../styles/home.module.scss';

const Home = props => {
    const [ userInput, setUserInput ] = useState('');
    const [ isFormSubmitted, setFormSumitted ] = useState(false);

    const handleUserInput = e => {
        setUserInput(e.target.value);
    }

    const handleSubmission = e => {
        if (e.key === 'Enter'){
            setFormSumitted(true);
        }
    }

    if (isFormSubmitted) {
        return <Redirect to={`/search?repo=${new URL(userInput).pathname}`} />
    }

    return (
        <div className={styles.home}>
            <span className={styles.title}>GitHub Issue Explorer</span>
            <div className={styles.form}>
                <SearchIcon className={styles.search_icon} />
                <input type="text" 
                       placeholder="Paste a link to a GitHub repo!" 
                       value={userInput} 
                       onChange={handleUserInput}
                       onKeyPress={handleSubmission} />
            </div>
        </div>
    )
};

export default Home;