import React, { Component } from 'react';
import { string, func, number, bool, shape } from 'prop-types';
import styles from './Star.scss';
import { Star as StarIcon } from 'Components/App/Icons';

class Star extends Component {
    state = {}

    renderStars = () => {

        const stars = [];
        for(let i = 0;  i < this.props.star.numberStars; i ++) {
            stars.push(
                <StarIcon key={i}/>
            );
        }

        return stars;
    }

    render() {
        const { numberStars } = this.props.star;
        let stars = null;
        const idLabel = `label-star-${numberStars}`;

        if(numberStars === 0) {
            stars = <strong>Todas las estrellas</strong>
        } else {
            stars = this.renderStars();
        }

        return (
            <label
                htmlFor={idLabel}
                className={styles.star}>
                <input
                    checked={this.props.star.checked}
                    onChange={(e) => { this.props.star.callback(e, this.props.star) } }
                    type="checkbox"
                    id={idLabel} />

                {stars}
            </label>
        )
    }
};

Star.defaultProps = {
    className: '',
};

Star.propTypes = {
    className: string,
    onClick: func,
    star: shape({
        callback: func.isRequired,
        numberStars: number.isRequired,
        checked: bool.isRequired
    }).isRequired
    
};

export default Star;
