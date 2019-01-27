import React from 'react';
import Tag from './Tag';

import styles from './../styles/issue.module.scss';
import IssueClosed from '../icons/issue-closed.svg';

const MyIcon = () => <IssueClosed />;

const Issue = props => {
    const { issue } = props;

    return (
        <div className={styles.issue_wrapper}>
            <span className={styles.issue_title}>{issue.title}</span>
            <MyIcon />
            <span className={styles.issue_body}>{issue.body ? issue.body : 'No description provided'}</span>
            <div className={styles.tags_list}>
                { issue.tags.map(t => <Tag key={t} tag={t} />) }
            </div>
        </div>
    );
};

export default Issue;