import React from 'react';
import styles from './ConstructionPage.module.css';
import constructionGif from '../../assets/images/giphy.webp'; // Example GIF
import Headers from '../../component/header/Headers';
import Footer from '../../component/footer/Footer';

const ConstructionPage = () => {
  return (

    <div>
        <Headers/>
        
           <div className={styles.container}>
        
        <div className={styles.animationContainer}>
          <img src={constructionGif} alt="Construction Worker Animation" className={styles.constructionImage} />
        </div>
        <div className={styles.messageContainer}>
          <h1 className={styles.title}>We’re Working Hard!</h1>
          <p className={styles.message}>Sorry for the inconvenience, this section is under construction. Please check back soon.</p>
        </div>
      </div>
    <Footer/>
    </div>
 
  );
};

export default ConstructionPage;
