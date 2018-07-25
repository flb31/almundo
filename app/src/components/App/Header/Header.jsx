import React, { Component } from 'react';
import styles from './Header.scss';
import logo from 'Assets/images/logo-almundo.svg';

class Header extends Component {
    state = { }
    render() { 
        return (
            <header className={styles.header}>
                <figure>
                    <img src={logo} alt="Logo almundo.com"/>
                </figure>
            </header>
        );
    }
}
 
export default Header;
