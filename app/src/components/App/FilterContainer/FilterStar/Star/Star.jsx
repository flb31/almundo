import React, { Component } from 'react';
import { string, func, number } from 'prop-types';
import styles from './Star.scss';
import { Star as StarIcon } from 'Components/App/Icons';

class Star extends Component {
    state = {}

    renderStars = () => {

        const stars = [];
        for(let i = 0;  i < this.props.numberStars; i ++) {
            stars.push(
                <StarIcon key={i}/>
            );
        }

        return stars;
    }

    render() {
        const { numberStars } = this.props;
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
                className={styles.star}
                onClick={(e) => this.props.onClick(numberStars) }>
                <input type="checkbox" id={idLabel} />

                {stars}
            </label>
        )
    }
};

Star.defaultProps = {
    className: '',
    onClick: () => {},
    numberStars: 0
};

Star.propTypes = {
    className: string,
    onClick: func,
    numberStars: number
};

export default Star;
