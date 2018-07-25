import React, { Component } from 'react';
import styles from './Input.scss';
import { string } from 'prop-types';

class Input extends Component {
    state = {
        value: ''
    }

    componentWillMount() {
        this.setState({
            value: this.props.value
        })
    }


    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    render() { 
        return (
            <input
                onChange={this.handleChange}
                className={`${this.props.className} ${styles.input}`}
                value={this.state.value}
                placeholder={this.props.placeholder}
            />
        );
    }
}

Input.defaultProps = {
    className: '',
    placeholder: '',
    value: ''
};

Input.propTypes = {
    placeholder: string,
    className: string,
    value: string
};
 
export default Input;
