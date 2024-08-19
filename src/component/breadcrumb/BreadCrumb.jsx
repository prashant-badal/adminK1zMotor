import React from 'react';
import styles from './Breadcrumb.module.css';  // Import your CSS module
import { FaHome } from 'react-icons/fa';

const BreadCrumb = () => {
  return (
    <div className={styles.bgGrey}>
      <div className={styles.containerSection}>
    
         
           <div className={`${styles.alignnItem}`}> 
                <div><a href="/home">
                  <FaHome className={styles.homeIcon}/>
                </a></div>
              </div>
                <div><span className={styles.separator}> &gt; </span></div>
                <div className={styles.breadCrumbText} >Vehicle Inventory</div>



       </div>
        
      
    </div>
  );
};

export default BreadCrumb;
