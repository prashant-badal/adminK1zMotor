import React from 'react';
import styles from './CarListing.module.css'; // Importing CSS Modules
import { FaHeart } from 'react-icons/fa';
import img1 from '../../assets/images/bg.jpg'
import FilterSidebar from '../filterSection/FilterSidebar.';
import { Pagination } from 'react-bootstrap';
const CarList = () => {
   

    const cars = [
        {
            id: 1,
            name: 'Ferrari F650 Scuderia',
            price: '$45,000',
            img: img1,
            description: 'Duis aute irure reprehender voluptate velit esacium fugiat nula pariatur...',
            highlights: ['35,000 mi', '2017', 'Auto'],
            specifications: [
                'Engine: DOHC 24-valve V-6',
                'Audio Controls on Steering Wheel',
                'Power Windows',
                'Daytime Running Lights',
                'Cruise Control, ABS',
            ]
        },
        {
            id: 2,
            name: 'Lamborghini Aventador',
            price: '$27,000',
            img: img1,
            description: 'Consectetur adipisicing elit. Odit aut rerum numquam hic eum, aperiam fuga...',
            highlights: ['20,000 mi', '2019', 'Manual'],
            specifications: [
                'Engine: V12 48-valve',
                'Leather Interior',
                'Power Steering',
                'Daytime Running Lights',
                'Rear Parking Sensors'
            ]
        },
        {
            id: 2,
            name: 'Lamborghini Aventador',
            price: '$27,000',
            img: img1,
            description: 'Consectetur adipisicing elit. Odit aut rerum numquam hic eum, aperiam fuga...',
            highlights: ['20,000 mi', '2019', 'Manual'],
            specifications: [
                'Engine: V12 48-valve',
                'Leather Interior',
                'Power Steering',
                'Daytime Running Lights',
                'Rear Parking Sensors'
            ]
        },
        {
            id: 2,
            name: 'Lamborghini Aventador',
            price: '$27,000',
            img: img1,
            description: 'Consectetur adipisicing elit. Odit aut rerum numquam hic eum, aperiam fuga...',
            highlights: ['20,000 mi', '2019', 'Manual'],
            specifications: [
                'Engine: V12 48-valve',
                'Leather Interior',
                'Power Steering',
                'Daytime Running Lights',
                'Rear Parking Sensors'
            ]
        },
        {
            id: 2,
            name: 'Lamborghini Aventador',
            price: '$27,000',
            img: img1,
            description: 'Consectetur adipisicing elit. Odit aut rerum numquam hic eum, aperiam fuga...',
            highlights: ['20,000 mi', '2019', 'Manual'],
            specifications: [
                'Engine: V12 48-valve',
                'Leather Interior',
                'Power Steering',
                'Daytime Running Lights',
                'Rear Parking Sensors'
            ]
        },
        {
            id: 2,
            name: 'Lamborghini Aventador',
            price: '$27,000',
            img: img1,
            description: 'Consectetur adipisicing elit. Odit aut rerum numquam hic eum, aperiam fuga...',
            highlights: ['20,000 mi', '2019', 'Manual'],
            specifications: [
                'Engine: V12 48-valve',
                'Leather Interior',
                'Power Steering',
                'Daytime Running Lights',
                'Rear Parking Sensors'
            ]
        },
        
    ];

    return (
        <div className={styles['mainContent']}>

        <div className={styles['filterGoods']}>
            <div className={styles.filterHeader}>
            <div className={styles['filterGoodsInfo']}>Showing 1-10 of 50 results</div>
                <div className={styles['filter-goods__select']}>
                    <label htmlFor="selectSort">Sort</label>
                    <select className={styles.selectpicker}>
                        <option value="price">Price</option>
                        <option value="name">Name</option>
                    </select>
                </div>
            </div>
            
                
                    
                
           

            <div className={styles.carsLists}>


                
    {cars.map(car => (
        

    <div key={car.id} className={styles.card}>
            <div  className={styles.cardImage}>
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
            <div className={styles.highlightBox}>
                        <table className={styles.highlightTable}>
                            <tbody>
                                <tr>
                                    {car.highlights.map((highlight, index) => (
                                        <td key={index} className={styles.highlightItem}>
                                            {highlight}
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                   </div>
        </div>
       
           
        
    ))}
        </div>
        <div className={styles.pagination}>

        <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
        </div>
  
        </div>
    <FilterSidebar/>
   
</div>

    );
};

export default CarList;
