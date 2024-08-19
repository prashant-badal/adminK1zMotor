import React from 'react';
import styles from './Card.module.css'; // Importing CSS Modules
import { FaHeart } from 'react-icons/fa';

const Card = ({ car }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <img src={car.img} alt={car.name} />
            </div>
            <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{car.name}</h3>
                <p className={styles.cardDescription}>{car.description}</p>
                <div className={styles.cardPrice}>{car.price}</div>
                <div className={styles.cardFooter}>
                    <div className={styles.likeIcon}>
                        <FaHeart />
                    </div>
                    <div className={styles.cardButtons}>
                        <button className={styles.btnPrimary}>Buy Now</button>
                        <button className={styles.btnSecondary}>Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
