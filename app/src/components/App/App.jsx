import React, { Component } from 'react';
import Header from 'Components/App/Header';
import Box from 'Components/App/Box';
import FilterContainer from './FilterContainer';
import { HotelCard } from 'Components/App/Hotel';

import './App.scss';
import sharedStyles from 'Styles/index.scss';

class App extends Component {
    render() {
        return (
            <div>
                <Header />

                <div className={`${sharedStyles.grid} ${sharedStyles['mid--p']}`}>
                    <aside className={`${sharedStyles.grid__item} ${sharedStyles['one-whole']} ${sharedStyles['mid--one-quarter']} ${sharedStyles['p-l-none']}`}>
                        <Box className={`${sharedStyles['phone--hidden']} ${sharedStyles['mid--show-block']}`}>
                            <strong>Filtros</strong>
                        </Box>

                        <FilterContainer sharedStyles={sharedStyles} />
                    </aside>

                    <section className={`${sharedStyles.grid__item} ${sharedStyles['one-whole']}  ${sharedStyles['mid--three-quarters']} ${sharedStyles['p-v']} ${sharedStyles['p-half-h']} ${sharedStyles['mid--p-v-none']}  ${sharedStyles['mid--p-r-none']} ${sharedStyles['mid--p-l']}`}>
                        <HotelCard className={sharedStyles['m-half-b']} sharedStyles={sharedStyles} />
                        <HotelCard className={sharedStyles['m-half-b']} sharedStyles={sharedStyles} />
                        <HotelCard className={sharedStyles['m-half-b']} sharedStyles={sharedStyles} />
                    </section>
                </div>

            </div>
        );
    }
}

export default App;
