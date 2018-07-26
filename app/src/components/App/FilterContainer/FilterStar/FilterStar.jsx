import React, { Component } from 'react';
import Star from './Star';

// Redux
import { connect } from 'react-redux';
import { getListHotels } from 'Redux/actions/hotels/actionCreators';
import { setFilter } from 'Redux/actions/filters/actionCreators';

class FilterStar extends Component {
    state = {
        stars: []
    }

    onChangeCheckbox = (e, star) => {
        star.checked = !star.checked;

        this.setState({
            star: star
        });

        let params = '';

        if(this.validateIsAllStars(star)) {
            params = `&stars=${this.getAllStars()}`;
            this.unCheckedAll();
        } else {
            const stars = this.getStarsChecked();
            params = (stars) ?  `&stars=${stars}` : '';

            this.unCheckedStartAll();
        }

        const q = (this.props.filters.q) ? this.props.filters.q : '';
        this.props.getListHotels(q, params);

        this.props.setFilter({
            params: params
        });
    }

    unCheckedAll = () => {
        const stars = this.state.stars;

        for(const star of stars) {
            if(star.numberStars !== 0) {
                star.checked = false;
            }
        }

        this.setState({
            stars: stars
        });
    }

    unCheckedStartAll = () => {
        const stars = this.state.stars;

        for(const star of stars) {
            if(star.numberStars === 0) {
                star.checked = false;
            }
        }

        this.setState({
            stars: stars
        });
    }

    validateIsAllStars = (star) => {
        return star.numberStars === 0 && star.checked;
    }

    getAllStars = () => {
        let str = '';

        for(const item of this.state.stars) {
            str += `${item.numberStars},`;
        }
        str = str.substring(2, str.length - 1);
        
        return str;
    }

    getStarsChecked= () => {
        let str = '';
        for(const item of this.state.stars) {
            if(item.checked) {
                str += `${item.numberStars},`;
            }
        }

        if(str.length > 0) {
            str = str.substr(0, str.length - 1);
        }
        
        return str;
    }

    setArrayStarts = () => {
        const stars = [];
        for(let i = 5; i >= 0; i--) {
            stars.push(
                {
                    checked: false,
                    callback: this.onChangeCheckbox,
                    numberStars: i
                }
            );
        }
        stars.unshift(stars.pop());

        this.setState({
            stars: stars
        });
    }

    componentWillMount() {
        this.setArrayStarts();
    }

    renderStars = () => {
        return this.state.stars.map( (star, index) => 
            <Star key={index} star={star} />
        );
    }

    render() { 
        return (
            <div>
                {this.renderStars()}
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
    getListHotels(q, params) {
        dispatch(getListHotels(q, params));
    },
    setFilter(filter) {
        dispatch(setFilter(filter));
    }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(FilterStar);
