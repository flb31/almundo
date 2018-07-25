import React from 'react';
import Box from 'Components/App/Box';
import Button from 'Components/App/Button';
import { Star } from 'Components/App/Icons';

import stylesButton from 'Components/App/Button/Button.scss';
import styles from './HotelCard.scss';

import amenityIcon from 'Assets/icons/amenities/bathtub.svg';

const HotelCard = (props) => {
    const {sharedStyles} = props;

    return (
        <article className={`${styles.hotel} ${props.className}`}>
            <Box className={`${sharedStyles.grid} ${sharedStyles['tablet--p-half']}`}>
                <figure className={`${sharedStyles.grid__item} ${sharedStyles['one-whole']} ${sharedStyles['tablet--one-third']} ${sharedStyles['p-l-none']} `}>
                    <img
                        className={styles.image}
                        src="http://via.placeholder.com/300x200"
                        alt="Main Hotel" />
                </figure>

                <summary className={`${sharedStyles.grid__item} ${sharedStyles['one-whole']} ${sharedStyles['tablet--one-third']} ${sharedStyles['p-half-l']} ${styles.summary}`}>
                    <h1>Hotel Stefanos</h1>
                    <div className={styles.stars}>
                        <Star />
                        <Star />
                        <Star />
                    </div>

                    <div className={styles.amenity}>
                        <img src={amenityIcon} alt="Amenity" />
                        <img src={amenityIcon} alt="Amenity" />
                        <img src={amenityIcon} alt="Amenity" />
                    </div>
                </summary>

                <div className={`${sharedStyles.grid__item} ${sharedStyles['one-whole']} ${sharedStyles['tablet--one-third']} ${sharedStyles['p-half-h']} ${sharedStyles['tablet--p-double-l']} ${styles.price}`} >
                    <div className={styles.container}>
                        <p>Precio por noche por habitación</p>
                        <h1>ARS <b>863</b></h1>
                        <Button className={stylesButton.big}>Ver hotel</Button>
                    </div>
                </div>
            </Box>
        </article>
    )
};

export default HotelCard;