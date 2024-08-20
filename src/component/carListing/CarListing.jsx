


// // src/components/CarList/CarList.js
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCars } from '../../redux/slice/carSlice';
// import styles from './CarListing.module.css'; // Importing CSS Modules
// import { FaHeart } from 'react-icons/fa';
// import FilterSidebar from '../filterSection/FilterSidebar';
// import { Pagination } from 'react-bootstrap';

// const CarList = () => {
//   const dispatch = useDispatch();
//   const { cars = [], loading, error } = useSelector((state) => state.car || {}); // Default to empty object
//   const [sortOption, setSortOption] = useState('price');

//   useEffect(() => {
//     dispatch(fetchCars());
//   }, [dispatch]);

//   const sortCars = (cars, option) => {
//     return cars.slice().sort((a, b) => {
//       const priceA = typeof a.price === 'string' ? a.price.replace('$', '').replace(',', '') : a.price;
//       const priceB = typeof b.price === 'string' ? b.price.replace('$', '').replace(',', '') : b.price;
//       const numPriceA = parseFloat(priceA);
//       const numPriceB = parseFloat(priceB);

//       if (option === 'price') {
//         return numPriceA - numPriceB;
//       } else if (option === 'name') {
//         return a.modelName.localeCompare(b.modelName);
//       }
//       return 0;
//     });
//   };

//   const handleSortChange = (e) => {
//     setSortOption(e.target.value);
//   };

//   const sortedCars = sortCars(cars, sortOption);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className={styles.mainContent}>
//       <div className={styles.filterGoods}>
//         <div className={styles.filterHeader}>
//           <div className={styles.filterGoodsInfo}>Showing 1-{sortedCars.length} of {sortedCars.length} results</div>
//           <div className={styles.filterGoodsSelect}>
//             <label htmlFor="selectSort">Sort</label>
//             <select className={styles.selectpicker} value={sortOption} onChange={handleSortChange}>
//               <option value="price">Price</option>
//               <option value="name">Name</option>
//             </select>
//           </div>
//         </div>
        
//         <div className={styles.carsLists}>
//           {sortedCars.length > 0 ? (
//             sortedCars.map(car => (
//               <div key={car.id} className={styles.card}>
//                 <div className={styles.cardBody}>
//                   <h3 className={styles.cardTitle}>{car.modelName}</h3>
//                   <p className={styles.cardDescription}>{car.make}</p>
//                   <div className={styles.cardPrice}>{car.price}</div>
//                   <div className={styles.cardFooter}>
//                     <div className={styles.likeIcon}>
//                       <FaHeart />
//                     </div>
//                     <div className={styles.cardButtons}>
//                       <button className={styles.btnPrimary}>Buy Now</button>
//                       <button className={styles.btnSecondary}>Details</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No cars available</p>
//           )}
//         </div>

//         <div className={styles.pagination}>
//           <Pagination>
//             <Pagination.First />
//             <Pagination.Prev />
//             <Pagination.Item>{1}</Pagination.Item>
//             <Pagination.Ellipsis />
//             <Pagination.Item>{10}</Pagination.Item>
//             <Pagination.Item>{11}</Pagination.Item>
//             <Pagination.Item active>{12}</Pagination.Item>
//             <Pagination.Ellipsis />
//             <Pagination.Item>{20}</Pagination.Item>
//             <Pagination.Next />
//             <Pagination.Last />
//           </Pagination>
//         </div>
//       </div>

//       <FilterSidebar />
//     </div>
//   );
// };

// export default CarList;


import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/slice/carSlice';
import styles from './CarListing.module.css';
import { FaHeart } from 'react-icons/fa';
import FilterSidebar from '../filterSection/FilterSidebar';
import { Pagination } from 'react-bootstrap';

const CarList = () => {
  const dispatch = useDispatch();
  const { cars = [], loading, error } = useSelector((state) => state.car || {});
  const [sortOption, setSortOption] = useState('price');
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(10); // Number of cars to display per page

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  const sortCars = (cars, option) => {
    return cars.slice().sort((a, b) => {
      const priceA = typeof a.price === 'string' ? a.price.replace('$', '').replace(',', '') : a.price;
      const priceB = typeof b.price === 'string' ? b.price.replace('$', '').replace(',', '') : b.price;
      const numPriceA = parseFloat(priceA);
      const numPriceB = parseFloat(priceB);

      if (option === 'price') {
        return numPriceA - numPriceB;
      } else if (option === 'name') {
        return a.modelName.localeCompare(b.modelName);
      }
      return 0;
    });
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    setCurrentPage(1); // Reset to the first page when sorting changes
  };

  const sortedCars = sortCars(cars, sortOption);

  // Pagination logic
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = sortedCars.slice(indexOfFirstCar, indexOfLastCar);

  const totalPages = Math.ceil(sortedCars.length / carsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.mainContent}>
      <div className={styles.filterGoods}>
        <div className={styles.filterHeader}>
          <div className={styles.filterGoodsInfo}>Showing {indexOfFirstCar + 1}-{Math.min(indexOfLastCar, sortedCars.length)} of {sortedCars.length} results</div>
          <div className={styles.filterGoodsSelect}>
            <label htmlFor="selectSort">Sort</label>
            <select className={styles.selectpicker} value={sortOption} onChange={handleSortChange}>
              <option value="price">Price</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
        
        <div className={styles.carsLists}>
          {currentCars.length > 0 ? (
            currentCars.map(car => (
              <div key={car.id} className={styles.card}>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{car.modelName}</h3>
                  <p className={styles.cardDescription}>{car.make}</p>
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
            ))
          ) : (
            <p>No cars available</p>
          )}
        </div>

        <div className={styles.pagination}>
          <Pagination>
            <Pagination.First onClick={() => handlePageChange(1)} />
            <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
            {[...Array(totalPages).keys()].map(number => (
              <Pagination.Item 
                key={number + 1} 
                active={number + 1 === currentPage} 
                onClick={() => handlePageChange(number + 1)}
              >
                {number + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
            <Pagination.Last onClick={() => handlePageChange(totalPages)} />
          </Pagination>
        </div>
      </div>
{/* 
      <FilterSidebar /> */}
    </div>
  );
};

export default CarList;

