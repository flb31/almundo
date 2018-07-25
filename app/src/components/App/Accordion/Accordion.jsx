import React, { Component } from 'react';
import Box from 'Components/App/Box';
import { string, bool } from 'prop-types';
import classNames from 'classnames';
import styles from './Accordion.scss';

class Accordion extends Component {

    state = {
        show: false
    }

    toogle = () => {
        this.setState({
            show: !this.state.show
        });
    }

    componentWillMount() {
        this.setState({
            show: this.props.startOpen
        })
    }

    render() {

        const classToogle = classNames({[styles.container__open]: this.state.show});

        return (
            <Box className={`${styles.container} ${this.props.className} ${classToogle}`}>
                <div
                    className={styles.container__header}
                    onClick={this.toogle}>
                    <img
                        className={styles.icon}
                        src={this.props.icon}
                        alt={this.props.title}/>
    
                    <span className={styles.title}>{this.props.title}</span>
                </div>
                {this.props.children}
            </Box>
        )
    }
}

Accordion.defaultProps = {
    className: '',
    startOpen: true
};

Accordion.propTypes = {
    icon: string.isRequired,
    title: string.isRequired,
    className: string,
    startOpen: bool
};

export default Accordion;
