import React from 'react';
import { Container, Navbar, Nav} from 'react-bootstrap';
import styles from './Headers.module.css'; // Assuming you're using CSS Modules
import 'bootstrap/dist/css/bootstrap.min.css';
import logo1 from '../../assets/images/logo1.jpg'; // Replace with your logo path
import { 
  FaClock, 
  FaEnvelope,
  FaPhone,
  FaShoppingBasket, 

} from 'react-icons/fa';
import SectionTitlePage from '../SectionTitleInventory/SectionTitleInventory';
import BreadCrumb from '../breadcrumb/BreadCrumb';
import { Link } from 'react-router-dom';


const Headers = () => {
  return (
    <>
      {/* Header */}
      <header className={styles.header}>
        {/* Top Bar */}
        <div className={styles.topBar}>
          <Container>
            <div className={styles.headerTopbarbox1}>
              <ul>
                <li>
                  <FaClock className={styles.icon} /> Mon - Sat : 09:00am to 06:00pm
                </li>
                <li>
                  <FaPhone className={styles.icon} />
                  <a href="tel:+0427983549">+14039252908</a>
                </li>
                <li>
                  <FaEnvelope className={styles.icon} />
                  <a href="mailto:support@motorland.com">support@motorland.com</a>
                </li>
              </ul>
            </div>
           
          </Container>
        </div>

        {/* Navbar */}
        <Navbar bg='light' expand="lg" id="nav">
          <Container>
            <Navbar.Brand href="/">
             
              <img
                className={`${styles.scrollLogo} hidden-xs img-responsive`}
                src={logo1}
                alt="logo"
              />
            </Navbar.Brand>

            <div className={styles.headerNavibox3}>
              {/* <ul className="nav navbar-nav hidden-xs clearfix vcenter">
                <li>
                  <div className={styles.headerCart}>
                    <a href="kjkh">
                      <FaShoppingBasket />
                      <span className="header-cart-count bg-primary">3</span>
                    </a>
                  </div>
                </li>
                <li>
                  <a className="btn_header_search" href="kjkh">
                    <i className="icon fa fa-search" aria-hidden="true"></i>
                  </a>
                </li>
              </ul> */}
             
            </div>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className={styles.navItem}>

              <Nav.Item><Link to="/home" className={styles.btnPrimary}> Home</Link></Nav.Item>
              <Nav.Item><Link to="/" className={styles.btnPrimary}> Inventory</Link></Nav.Item>
              <Nav.Item><Link to="/online-sales" className={styles.btnPrimary}> Online Sales</Link></Nav.Item>
              <Nav.Item><Link to="/car-finance" className={styles.btnPrimary}> Car Finance</Link></Nav.Item>
              
              </Nav>
              
            </Navbar.Collapse>
            <button className={styles.sellBtn} ><Link className={styles.sellBtnLink} to="/sell">Sell Car</Link></button>
          </Container>
        </Navbar>
      </header>
       {/* <BreadCrumb/>
      <SectionTitlePage/> */}
     

    





  
    </>
  );
};

export default Headers;
