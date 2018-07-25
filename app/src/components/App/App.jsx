import React, { Component } from 'react';
import Header from './Header';
import Accordion from './Accordion';

import styles from './App.scss';
import sharedStyles from 'Styles/index.scss';

import searchIcon from 'Assets/icons/filters/search.svg';
import starIcon from 'Assets/icons/filters/star.svg';

class App extends Component {
    render() {
        return (
            <div>
                <Header />

                <div className={`${sharedStyles.grid} ${sharedStyles.p}`}>
                    <div className={`${sharedStyles.grid__item} ${sharedStyles['one-quarter']}`}>
                        <div className={styles.title_filter}>
                            <strong>Filtros</strong>
                        </div>

                        <Accordion
                            icon={searchIcon}
                            title="Nombre de hotel"
                            className={sharedStyles['m-quarter-t']}>
                            input here
                        </Accordion>

                        <Accordion
                            icon={starIcon}
                            title="Estrellas"
                            className={sharedStyles['m-quarter-t']}>
                            stars here
                        </Accordion>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
