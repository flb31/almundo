import React, { Component } from 'react';
import Star from './Star';

class FilterStar extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <Star />
                <Star numberStars={5} />
                <Star numberStars={4} />
                <Star numberStars={3} />
                <Star numberStars={2} />
                <Star numberStars={1} />
            </div>
        );
    }
}
 
export default FilterStar;