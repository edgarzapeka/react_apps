import React from 'react';

import styles from './../styles/filters.module.scss';

export const FILTERS_VALUES = [
    'All Issues',
    'Open Issues',
    'Closed Issues',
    'Pull Requests'
];

const Filters = props => {
    const {filter, setFilter} = props;
    
    return (
        <div>
            { FILTERS_VALUES.map(f => (
                <span 
                    className={`${styles.menu_item} ${f === filter ? styles.menu_item_selected : ''}`} 
                    key={f}
                    onClick={() => setFilter(f)}>
                        {f}
                </span>    
            )) }
        </div>
    );
};

export default Filters;