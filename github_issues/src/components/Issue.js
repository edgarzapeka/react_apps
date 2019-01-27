import React from 'react';
import Tag from './Tag';

import styles from './../styles/issue.module.scss';
import { ReactComponent as IssueClosedIcon } from '../icons/issue-closed.svg';
import { ReactComponent as PullRequestIcon } from '../icons/pull-request.svg';

const Issue = props => {
    const { issue } = props;

    return (
        <div className={styles.issue_wrapper}>
            <div className={styles.issue_title}>
                {true ? 
                    <PullRequestIcon className={styles.issue_icon}/> :
                    <IssueClosedIcon className={styles.issue_icon}/>
                }
                <span className={styles.issue_title_text}>
                    {issue.title}
                </span>
            </div>
            <span className={styles.issue_body}>{issue.body ? issue.body : 'No description provided'}</span>
            <div className={styles.tags_list}>
                { issue.tags.map(t => <Tag key={t} tag={t} />) }
            </div>
        </div>
    );
};

export default Issue;