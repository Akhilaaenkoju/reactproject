// import React from "react";
// import "./airports.module.css"
// const Airports = () => {
//   return (
//     <div>
//       <h1>Airports</h1>
//       <p>Request rides to and from over 700 airports around the world.</p>
//     </div>
//   );
// };

// export default Airports;


import React from 'react';
//import styles from './Airports.module.css'; // Using CSS Module for styling
import styles from "./airports.module.css"
//import uberAirport from '../assets/images/uberAirport.webp';
const Airports = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.breadcrumb}>Home › Ride › Airports</p>
        <h1 className={styles.heading}>Airport rides are better with Uber</h1>
        <p className={styles.description}>
          Request a ride to over 700 airports around the world. In most regions, you’ll also have the option to schedule an airport pickup or dropoff in advance.
        </p>
        <div className={styles.form}>
          <div className={styles.inputContainer}>
            <input className={styles.input} type="text" placeholder="Where from?" />
            <span className={styles.icon}>📍</span>
          </div>
          <div className={styles.inputContainer}>
            <input className={styles.input} type="text" placeholder="Where to?" />
            <span className={styles.icon}>📍</span>
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.primaryButton}>See prices</button>
          <button className={styles.secondaryButton}>Schedule for later</button>
        </div>
      </div>
      <div className={styles.imageContainer}>
      {/* <img src={uberAirport} alt="Airport" className={styles.image} /> */}
        <img src="../assets/images/uberAirport" alt="Airport" className={styles.image} />
      </div>
    </div>
  );
};

export default Airports;

