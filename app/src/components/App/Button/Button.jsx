import React from 'react';
import { string, func } from 'prop-types';
import styles from './Button.scss';

const Button = (props) => {
    return(
        <button
            className={`${styles.button} ${styles.full} ${props.className}`}
            onClick={ () => { props.onClick() } }>
            {props.children}
        </button>
    )
};


Button.defaultProps = {
    className: '',
    onClick: () => {}
};

Button.propTypes = {
    className: string,
    onClick: func
};

export default Button;
