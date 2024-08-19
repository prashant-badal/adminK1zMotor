import React from 'react';
import styles from './SectionTitleInventory.module.css'; // Assuming you're using CSS Modules
import 'bootstrap/dist/css/bootstrap.min.css';

const SectionTitlePage = () => {
  return (
    <div className={styles.sectionTitlePage}>
      <div className={styles.areaBgInner}>
        <div className="container">
          <div className="row">
            <div className={`${styles.areaIncline} col-xs-12`} >
              <h1 className={styles.titlePage}>Cars Listings I</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTitlePage;
