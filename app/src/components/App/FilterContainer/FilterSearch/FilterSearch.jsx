import React, { Component } from 'react';
import Input from 'Components/App/Input';
import Button from 'Components/App/Button';

// Redux
import { connect } from 'react-redux';
import { getListHotels } from 'Redux/actions/hotels/actionCreators';
import { setFilter } from 'Redux/actions/filters/actionCreators';

class FilterSearch extends Component {
    state = { 
        value: ''
    }

    searchByText = () => {
        const params = this.props.filters.params ? this.props.filters.params : '';
        this.props.getListHotels(this.state.value, params);
        this.props.setFilter({
            q: this.state.value
        });
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    render() { 
        return (
            <div>
                <div className={`${this.props.sharedStyles.grid} ${this.props.sharedStyles['grid-negative']}`}>
                    <div className={`${this.props.sharedStyles.grid__item} ${this.props.sharedStyles['two-thirds']}`}>
                        <Input
                            placeholder="Ingrese el nombre del hotel"
                            value={this.state.value}
                            onChange={this.handleChange}
                            onEnter={this.searchByText}
                            />
                    </div>

                    <div className={`${this.props.sharedStyles.grid__item} ${this.props.sharedStyles['one-third']} ${this.props.sharedStyles['p-half-h']}`}>
                        <Button onClick={this.searchByText}>Aceptar</Button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    
    return {
        filters: state.filters
    };
};
  
const mapDispatchToProps = (dispatch, ownProps) => ({
    getListHotels(query) {
        dispatch(getListHotels(query));
    },
    setFilter(filter) {
        dispatch(setFilter(filter));
    }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(FilterSearch);
