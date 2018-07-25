import React, { Component } from 'react';
import styles from './Header.scss';
import logo from 'Assets/images/logo-almundo.svg';

class Header extends Component {
    state = { }
    render() { 
        return (
            <div className={styles.header}>
                <img src={logo} alt="Logo almundo.com"/>
            </div>
        );
    }
}
 
export default Header;