import React, { Component } from 'react';
import styles from './Input.scss';
import { string, func } from 'prop-types';

class Input extends Component {
    state = {}

    handleEnter = (e) => {
        if(e.keyCode === 13) {
            this.props.onEnter();
        }
    }

    render() { 
        return (
            <input
                className={`${this.props.className} ${styles.input}`}
                value={this.props.value}
                placeholder={this.props.placeholder}
                onChange={(e) => { this.props.onChange(e) }}
                onKeyUp={this.handleEnter}
            />
        );
    }
}

Input.defaultProps = {
    className: '',
    placeholder: '',
    value: '', 
    onChange: () => {},
    onEnter: () => {}
};

Input.propTypes = {
    placeholder: string,
    className: string,
    value: string,
    onChange: func,
    onEnter: func
};
 
export default Input;
