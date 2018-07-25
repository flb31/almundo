import React, { Component } from 'react';
import Header from 'Components/App/Header';
import Accordion from 'Components/App/Accordion';
import Box from 'Components/App/Box';
import Input from 'Components/App/Input';

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
                    <aside className={`${sharedStyles.grid__item} ${sharedStyles['one-quarter']}`}>
                        <Box className={styles.title_filter}>
                            <strong>Filtros</strong>
                        </Box>

                        <Accordion
                            icon={searchIcon}
                            title="Nombre de hotel"
                            className={sharedStyles['m-quarter-t']}>

                            <div className={`${sharedStyles.grid} ${sharedStyles['grid-negative']}`}>
                                <div className={`${sharedStyles.grid__item} ${sharedStyles['two-thirds']}`}>
                                    <Input placeholder="Ingrese el nombre del hotel" />
                                </div>
                            </div>

                        </Accordion>

                        <Accordion
                            icon={starIcon}
                            title="Estrellas"
                            className={sharedStyles['m-quarter-t']}>
                            stars here
                        </Accordion>
                    </aside>
                </div>

            </div>
        );
    }
}

export default App;
