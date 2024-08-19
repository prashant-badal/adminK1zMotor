import React from 'react';
import styles from './FilterSidebar.module.css'; // Importing CSS Module

const FilterSidebar = () => {
  return (
    <div className="col-md-3">
      <aside className={styles['l-sidebar']}>
        <form className={styles['b-filter-2']}>
          <h3 className={styles['b-filter-2__title']}>Search Options</h3>
          <div className={styles['b-filter-2__inner']}>
            <div className={styles['b-filter-2__group']}>
              <div className={styles['b-filter-2__group-title']}>Keyword</div>
              <input className={styles['form-control']} type="text" placeholder="Keyword..." />
            </div>

            <div className={styles['b-filter-2__group']}>
              <div className={styles['b-filter-2__group-title']}>Vehicle Type</div>
              <select className={styles.selectpicker}>
                <option>All Types</option>
                <option>Type 1</option>
                <option>Type 2</option>
                <option>Type 3</option>
              </select>
            </div>

            <div className={styles['b-filter-2__group']}>
              <div className={styles['b-filter-2__group-title']}>Make</div>
              <select className={styles.selectpicker}>
                <option>All Makes</option>
                <option>Make 1</option>
                <option>Make 2</option>
              </select>
            </div>

            <div className={styles['b-filter-2__group']}>
              <div className={styles['b-filter-2__group-title']}>Model</div>
              <select className={styles.selectpicker}>
                <option>All Models</option>
                <option>Model 1</option>
                <option>Model 2</option>
                <option>Model 3</option>
              </select>
            </div>

            <div className={styles['b-filter-2__group']}>
              <div className={styles['b-filter-2__group-title']}>Model Year</div>
              <select className={styles.selectpicker}>
                <option>Min Year</option>
                <option>Year 1</option>
                <option>Year 2</option>
              </select>
              <select className={styles.selectpicker}>
                <option>Max Year</option>
                <option>Year 1</option>
                <option>Year 2</option>
              </select>
            </div>

            <div className={styles['b-filter-2__group']}>
              <div className={styles['b-filter-2__group-title']}>Fuel Type</div>
              <select className={styles.selectpicker}>
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
                  <input className={styles['b-filter-type-2__input']} id="typePickup" type="checkbox" />
                  <label className={styles['b-filter-type-2__label']} htmlFor="typePickup">
                    <i className="b-filter-type-2__icon flaticon-pick-up"></i><span>PICKUP</span>
                  </label>
                </div>
                <div className={styles['b-filter-type-2__item']}>
                  <input className={styles['b-filter-type-2__input']} id="typeSuv" type="checkbox" />
                  <label className={styles['b-filter-type-2__label']} htmlFor="typeSuv">
                    <i className="b-filter-type-2__icon flaticon-car-of-hatchback-model"></i><span>SUV</span>
                  </label>
                </div>
                {/* Repeat other body styles */}
              </div>
            </div>

            {/* <div className={styles['b-filter-2__group']}>
              <div className={styles['b-filter-2__group-title']}>Transmission</div>
              <div className="checkbox-group">
                <input className="forms__check" id="check-1" type="checkbox" />
                <label className={styles['forms__label']} htmlFor="check-1">4 Speed Automatic</label>
                <input className="forms__check" id="check-2" type="checkbox" />
                <label className={styles['forms__label']} htmlFor="check-2">4 Speed Manual</label>
                <input className="forms__check" id="check-3" type="checkbox" />
                <label className={styles['forms__label']} htmlFor="check-3">5 Speed Automatic</label>
              </div>
            </div> */}
          </div>
        </form>
      </aside>
    </div>
  );
};

export default FilterSidebar;
