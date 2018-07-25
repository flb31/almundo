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
        const icon = (this.props.icon) ? <img className={styles.icon} src={this.props.icon} alt={this.props.title}/> : null

        return (
            <Box className={`${styles.container} ${this.props.className} ${classToogle}`}>
                <div
                    className={`${styles.container__header} ${this.props.classNameHeader}`}
                    onClick={this.toogle}>
                    {icon}
    
                    <span className={styles.title}>{this.props.title}</span>
                </div>
                {this.props.children}
            </Box>
        )
    }
}

Accordion.defaultProps = {
    className: '',
    classNameHeader: '',
    startOpen: true,
    icon: ''
};

Accordion.propTypes = {
    icon: string,
    title: string.isRequired,
    className: string,
    classNameHeader: string,
    startOpen: bool
};

export default Accordion;
