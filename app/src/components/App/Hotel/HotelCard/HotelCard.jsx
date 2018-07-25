import React from 'react';
import Box from 'Components/App/Box';
import Button from 'Components/App/Button';
import { Star } from 'Components/App/Icons';

import stylesButton from 'Components/App/Button/Button.scss';
import styles from './HotelCard.scss';

const HotelCard = (props) => {
    const {sharedStyles, hotel} = props;


    // Starts
    let renderStars = [];
    for(let i = 0; i < hotel.stars; i++) {
        renderStars.push(<Star key={i} />);
    }

    // Amenities
    let renderAmenities = hotel.amenities.map( (amenity, index) => {
        const icon = require(`Assets/icons/amenities/${amenity}.svg`);
        return <img src={icon} alt="Amenity" key={index} />;
    });
    

    return (
        <article className={`${styles.hotel} ${props.className}`}>
            <Box className={`${sharedStyles.grid} ${sharedStyles['tablet--p-half']}`}>
                <figure className={`${sharedStyles.grid__item} ${sharedStyles['one-whole']} ${sharedStyles['tablet--one-third']} ${sharedStyles['p-l-none']} `}>
                    <img
                        className={styles.image}
                        src={hotel.image}
                        alt={hotel.name} />
                </figure>

                <summary className={`${sharedStyles.grid__item} ${sharedStyles['one-whole']} ${sharedStyles['tablet--one-third']} ${sharedStyles['p-half-l']} ${styles.summary}`}>
                    <h1>{hotel.name}</h1>
                    <div className={styles.stars}>
                        {renderStars}
                    </div>

                    <div className={styles.amenity}>
                        {renderAmenities}
                    </div>
                </summary>

                <div className={`${sharedStyles.grid__item} ${sharedStyles['one-whole']} ${sharedStyles['tablet--one-third']} ${sharedStyles['p-half-h']} ${sharedStyles['tablet--p-double-l']} ${styles.price}`} >
                    <div className={styles.container}>
                        <p>Precio por noche por habitación</p>
                        <h1>ARS <b>{hotel.price}</b></h1>
                        <Button className={stylesButton.big}>Ver hotel</Button>
                    </div>
                </div>
            </Box>
        </article>
    )
};

export default HotelCard;