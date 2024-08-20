// // import React from 'react';
// // import styles from './FilterSidebar.module.css'; // Importing CSS Module

// // const FilterSidebar = () => {
// //   return (
// //     <div className="col-md-3">
// //       <aside className={styles['l-sidebar']}>
// //         <form className={styles['b-filter-2']}>
// //           <h3 className={styles['b-filter-2__title']}>Search Options</h3>
// //           <div className={styles['b-filter-2__inner']}>
// //             <div className={styles['b-filter-2__group']}>
// //               <div className={styles['b-filter-2__group-title']}>Keyword</div>
// //               <input className={styles['form-control']} type="text" placeholder="Keyword..." />
// //             </div>

// //             <div className={styles['b-filter-2__group']}>
// //               <div className={styles['b-filter-2__group-title']}>Vehicle Type</div>
// //               <select className={styles.selectpicker}>
// //                 <option>All Types</option>
// //                 <option>Type 1</option>
// //                 <option>Type 2</option>
// //                 <option>Type 3</option>
// //               </select>
// //             </div>

// //             <div className={styles['b-filter-2__group']}>
// //               <div className={styles['b-filter-2__group-title']}>Make</div>
// //               <select className={styles.selectpicker}>
// //                 <option>All Makes</option>
// //                 <option>Make 1</option>
// //                 <option>Make 2</option>
// //               </select>
// //             </div>

// //             <div className={styles['b-filter-2__group']}>
// //               <div className={styles['b-filter-2__group-title']}>Model</div>
// //               <select className={styles.selectpicker}>
// //                 <option>All Models</option>
// //                 <option>Model 1</option>
// //                 <option>Model 2</option>
// //                 <option>Model 3</option>
// //               </select>
// //             </div>

// //             <div className={styles['b-filter-2__group']}>
// //               <div className={styles['b-filter-2__group-title']}>Model Year</div>
// //               <select className={styles.selectpicker}>
// //                 <option>Min Year</option>
// //                 <option>Year 1</option>
// //                 <option>Year 2</option>
// //               </select>
// //               <select className={styles.selectpicker}>
// //                 <option>Max Year</option>
// //                 <option>Year 1</option>
// //                 <option>Year 2</option>
// //               </select>
// //             </div>

// //             <div className={styles['b-filter-2__group']}>
// //               <div className={styles['b-filter-2__group-title']}>Fuel Type</div>
// //               <select className={styles.selectpicker}>
// //                 <option>All Fuel Types</option>
// //                 <option>Type 1</option>
// //                 <option>Type 2</option>
// //                 <option>Type 3</option>
// //               </select>
// //             </div>

// //             <div className={styles['b-filter-2__group']}>
// //               <div className={styles['b-filter-2__group-title']}>Filter Price</div>
// //               <div className={styles['ui-filter-slider']}>
// //                 <div id="slider-price"></div>
// //                 <div className={styles['ui-filter-slider__info']}>
// //                   <div className={styles['ui-filter-slider__label']}>Price Range:</div>
// //                   <span id="slider-snap-value-lower"></span>-<span id="slider-snap-value-upper"></span>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className={styles['b-filter-2__group']}>
// //               <div className={styles['b-filter-2__group-title']}>Body Style</div>
// //               <div className={styles['b-filter-type-2']}>
// //                 <div className={styles['b-filter-type-2__item']}>
// //                   <input className={styles['b-filter-type-2__input']} id="typePickup" type="checkbox" />
// //                   <label className={styles['b-filter-type-2__label']} htmlFor="typePickup">
// //                     <i className="b-filter-type-2__icon flaticon-pick-up"></i><span>PICKUP</span>
// //                   </label>
// //                 </div>
// //                 <div className={styles['b-filter-type-2__item']}>
// //                   <input className={styles['b-filter-type-2__input']} id="typeSuv" type="checkbox" />
// //                   <label className={styles['b-filter-type-2__label']} htmlFor="typeSuv">
// //                     <i className="b-filter-type-2__icon flaticon-car-of-hatchback-model"></i><span>SUV</span>
// //                   </label>
// //                 </div>
// //                 {/* Repeat other body styles */}
// //               </div>
// //             </div>

// //             {/* <div className={styles['b-filter-2__group']}>
// //               <div className={styles['b-filter-2__group-title']}>Transmission</div>
// //               <div className="checkbox-group">
// //                 <input className="forms__check" id="check-1" type="checkbox" />
// //                 <label className={styles['forms__label']} htmlFor="check-1">4 Speed Automatic</label>
// //                 <input className="forms__check" id="check-2" type="checkbox" />
// //                 <label className={styles['forms__label']} htmlFor="check-2">4 Speed Manual</label>
// //                 <input className="forms__check" id="check-3" type="checkbox" />
// //                 <label className={styles['forms__label']} htmlFor="check-3">5 Speed Automatic</label>
// //               </div>
// //             </div> */}
// //           </div>
// //         </form>
// //       </aside>
// //     </div>
// //   );
// // };

// // export default FilterSidebar;


// import React, { useState } from 'react';
// import styles from './FilterSidebar.module.css'; // Importing CSS Module

// const FilterSidebar = () => {
//   // State to manage filter options
//   const [keyword, setKeyword] = useState('');
//   const [vehicleType, setVehicleType] = useState('All Types');
//   const [make, setMake] = useState('All Makes');
//   const [model, setModel] = useState('All Models');
//   const [minYear, setMinYear] = useState('Min Year');
//   const [maxYear, setMaxYear] = useState('Max Year');
//   const [fuelType, setFuelType] = useState('All Fuel Types');
//   const [priceRange, setPriceRange] = useState([0, 100000]); // Default range

//   // Handle changes to input fields
//   const handleInputChange = (e) => setKeyword(e.target.value);
//   const handleSelectChange = (e) => {
//     const { name, value } = e.target;
//     switch (name) {
//       case 'vehicleType':
//         setVehicleType(value);
//         break;
//       case 'make':
//         setMake(value);
//         break;
//       case 'model':
//         setModel(value);
//         break;
//       case 'minYear':
//         setMinYear(value);
//         break;
//       case 'maxYear':
//         setMaxYear(value);
//         break;
//       case 'fuelType':
//         setFuelType(value);
//         break;
//       default:
//         break;
//     }
//   };

//   // Handle slider change (mock implementation)
//   const handleSliderChange = (event) => {
//     // Assuming you use a library for slider and update state accordingly
//     // Example: setPriceRange([min, max]);
//   };

//   return (
//     <div className="col-md-3">
//       <aside className={styles['l-sidebar']}>
//         <form className={styles['b-filter-2']}>
//           <h3 className={styles['b-filter-2__title']}>Search Options</h3>
//           <div className={styles['b-filter-2__inner']}>
//             <div className={styles['b-filter-2__group']}>
//               <div className={styles['b-filter-2__group-title']}>Keyword</div>
//               <input
//                 className={styles['form-control']}
//                 type="text"
//                 placeholder="Keyword..."
//                 value={keyword}
//                 onChange={handleInputChange}
//               />
//             </div>

//             <div className={styles['b-filter-2__group']}>
//               <div className={styles['b-filter-2__group-title']}>Vehicle Type</div>
//               <select
//                 className={styles.selectpicker}
//                 name="vehicleType"
//                 value={vehicleType}
//                 onChange={handleSelectChange}
//               >
//                 <option>All Types</option>
//                 <option>Type 1</option>
//                 <option>Type 2</option>
//                 <option>Type 3</option>
//               </select>
//             </div>

//             <div className={styles['b-filter-2__group']}>
//               <div className={styles['b-filter-2__group-title']}>Make</div>
//               <select
//                 className={styles.selectpicker}
//                 name="make"
//                 value={make}
//                 onChange={handleSelectChange}
//               >
//                 <option>All Makes</option>
//                 <option>Make 1</option>
//                 <option>Make 2</option>
//               </select>
//             </div>

//             <div className={styles['b-filter-2__group']}>
//               <div className={styles['b-filter-2__group-title']}>Model</div>
//               <select
//                 className={styles.selectpicker}
//                 name="model"
//                 value={model}
//                 onChange={handleSelectChange}
//               >
//                 <option>All Models</option>
//                 <option>Model 1</option>
//                 <option>Model 2</option>
//                 <option>Model 3</option>
//               </select>
//             </div>

//             <div className={styles['b-filter-2__group']}>
//               <div className={styles['b-filter-2__group-title']}>Model Year</div>
//               <select
//                 className={styles.selectpicker}
//                 name="minYear"
//                 value={minYear}
//                 onChange={handleSelectChange}
//               >
//                 <option>Min Year</option>
//                 <option>Year 1</option>
//                 <option>Year 2</option>
//               </select>
//               <select
//                 className={styles.selectpicker}
//                 name="maxYear"
//                 value={maxYear}
//                 onChange={handleSelectChange}
//               >
//                 <option>Max Year</option>
//                 <option>Year 1</option>
//                 <option>Year 2</option>
//               </select>
//             </div>

//             <div className={styles['b-filter-2__group']}>
//               <div className={styles['b-filter-2__group-title']}>Fuel Type</div>
//               <select
//                 className={styles.selectpicker}
//                 name="fuelType"
//                 value={fuelType}
//                 onChange={handleSelectChange}
//               >
//                 <option>All Fuel Types</option>
//                 <option>Type 1</option>
//                 <option>Type 2</option>
//                 <option>Type 3</option>
//               </select>
//             </div>

//             <div className={styles['b-filter-2__group']}>
//               <div className={styles['b-filter-2__group-title']}>Filter Price</div>
//               <div className={styles['ui-filter-slider']}>
//                 <div id="slider-price"></div>
//                 <div className={styles['ui-filter-slider__info']}>
//                   <div className={styles['ui-filter-slider__label']}>Price Range:</div>
//                   <span>{priceRange[0]}</span> - <span>{priceRange[1]}</span>
//                 </div>
//               </div>
//             </div>

//             <div className={styles['b-filter-2__group']}>
//               <div className={styles['b-filter-2__group-title']}>Body Style</div>
//               <div className={styles['b-filter-type-2']}>
//                 <div className={styles['b-filter-type-2__item']}>
//                   <input className={styles['b-filter-type-2__input']} id="typePickup" type="checkbox" />
//                   <label className={styles['b-filter-type-2__label']} htmlFor="typePickup">
//                     <i className="b-filter-type-2__icon flaticon-pick-up"></i><span>PICKUP</span>
//                   </label>
//                 </div>
//                 <div className={styles['b-filter-type-2__item']}>
//                   <input className={styles['b-filter-type-2__input']} id="typeSuv" type="checkbox" />
//                   <label className={styles['b-filter-type-2__label']} htmlFor="typeSuv">
//                     <i className="b-filter-type-2__icon flaticon-car-of-hatchback-model"></i><span>SUV</span>
//                   </label>
//                 </div>
//                 {/* Repeat other body styles here */}
//               </div>
//             </div>

//           </div>
//         </form>
//       </aside>
//     </div>
//   );
// };

// export default FilterSidebar;


import React from 'react';
import styles from './FilterSidebar.module.css'; // Importing CSS Module

const FilterSidebar = ({ onFilterChange }) => {
  // Handle filter changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ [name]: value });
  };

  return (
    <div className="col-md-3">
      <aside className={styles['l-sidebar']}>
        <form className={styles['b-filter-2']}>
          <h3 className={styles['b-filter-2__title']}>Search Options</h3>
          <div className={styles['b-filter-2__inner']}>
            <div className={styles['b-filter-2__group']}>
              <div className={styles['b-filter-2__group-title']}>Keyword</div>
              <input
                className={styles['form-control']}
                type="text"
                name="keyword"
                placeholder="Keyword..."
                onChange={handleChange}
              />
            </div>

            <div className={styles['b-filter-2__group']}>
              <div className={styles['b-filter-2__group-title']}>Vehicle Type</div>
              <select
                className={styles.selectpicker}
                name="vehicleType"
                onChange={handleChange}
              >
                <option>All Types</option>
                <option>Type 1</option>
                <option>Type 2</option>
                <option>Type 3</option>
              </select>
            </div>

            <div className={styles['b-filter-2__group']}>
              <div className={styles['b-filter-2__group-title']}>Make</div>
              <select
                className={styles.selectpicker}
                name="make"
                onChange={handleChange}
              >
                <option>All Makes</option>
                <option>Make 1</option>
                <option>Make 2</option>
              </select>
            </div>

            <div className={styles['b-filter-2__group']}>
              <div className={styles['b-filter-2__group-title']}>Model</div>
              <select
                className={styles.selectpicker}
                name="model"
                onChange={handleChange}
              >
                <option>All Models</option>
                <option>Model 1</option>
                <option>Model 2</option>
                <option>Model 3</option>
              </select>
            </div>

            <div className={styles['b-filter-2__group']}>
              <div className={styles['b-filter-2__group-title']}>Model Year</div>
              <select
                className={styles.selectpicker}
                name="minYear"
                onChange={handleChange}
              >
                <option>Min Year</option>
                <option>Year 1</option>
                <option>Year 2</option>
              </select>
              <select
                className={styles.selectpicker}
                name="maxYear"
                onChange={handleChange}
              >
                <option>Max Year</option>
                <option>Year 1</option>
                <option>Year 2</option>
              </select>
            </div>

            <div className={styles['b-filter-2__group']}>
              <div className={styles['b-filter-2__group-title']}>Fuel Type</div>
              <select
                className={styles.selectpicker}
                name="fuelType"
                onChange={handleChange}
              >
                <option>All Fuel Types</option>
                <option>Type 1</option>
                <option>Type 2</option>
                <option>Type 3</option>
              </select>
            </div>

            <div className={styles['b-filter-2__group']}>
              <div className={styles['b-filter-2__group-title']}>Filter Price</div>
              <div className={styles['ui-filter-slider']}>
                <div id="slider-price"></div>
                <div className={styles['ui-filter-slider__info']}>
                  <div className={styles['ui-filter-slider__label']}>Price Range:</div>
                  <span id="slider-snap-value-lower"></span>-<span id="slider-snap-value-upper"></span>
                </div>
              </div>
            </div>

            <div className={styles['b-filter-2__group']}>
              <div className={styles['b-filter-2__group-title']}>Body Style</div>
              <div className={styles['b-filter-type-2']}>
                <div className={styles['b-filter-type-2__item']}>
                  <input className={styles['b-filter-type-2__input']} id="typePickup" type="checkbox" name="bodyStyle" value="Pickup" onChange={handleChange} />
                  <label className={styles['b-filter-type-2__label']} htmlFor="typePickup">
                    <i className="b-filter-type-2__icon flaticon-pick-up"></i><span>PICKUP</span>
                  </label>
                </div>
                <div className={styles['b-filter-type-2__item']}>
                  <input className={styles['b-filter-type-2__input']} id="typeSuv" type="checkbox" name="bodyStyle" value="SUV" onChange={handleChange} />
                  <label className={styles['b-filter-type-2__label']} htmlFor="typeSuv">
                    <i className="b-filter-type-2__icon flaticon-car-of-hatchback-model"></i><span>SUV</span>
                  </label>
                </div>
                {/* Repeat other body styles here */}
              </div>
            </div>
          </div>
        </form>
      </aside>
    </div>
  );
};

export default FilterSidebar;

