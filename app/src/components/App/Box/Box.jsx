import React from 'react';
import styles from './Box.scss';

const Box = (props) => {
    return (
        <div className={`${styles.box} ${props.className}`}>
            {props.children}
        </div>
    );
};

export default Box;
