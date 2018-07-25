import React, { Component } from 'react';
import Header from 'Components/App/Header';
import Box from 'Components/App/Box';
import FilterContainer from './FilterContainer';
import { HotelCard } from 'Components/App/Hotel';

// Redux
import { connect } from 'react-redux';
import { getListHotels } from 'Redux/actions/hotels/actionCreators';

import './App.scss';
import sharedStyles from 'Styles/index.scss';

class App extends Component {

    componentDidMount() {
        this.props.getListHotels();
    }

    renderHotels = () => {
        const { items } = this.props.hotels;

        return items.map( (hotel, index) => {
            return <HotelCard
                key={hotel.id}
                hotel={hotel}
                className={sharedStyles['m-half-b']}
                sharedStyles={sharedStyles} />
        });
    }

    render() {
        const { hotels } = this.props;

        const renderHotels = (!hotels.working) ? this.renderHotels() : <strong>Loading</strong>

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
                        { renderHotels }
                        { hotels.error }
                    </section>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    
    return {
        hotels: state.hotels
    };
};
  
const mapDispatchToProps = (dispatch: Function, ownProps) => ({
    getListHotels() {
        dispatch(getListHotels());
    }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(App);
