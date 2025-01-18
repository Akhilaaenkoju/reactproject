// src/pages/Ride.js
import React from 'react';

const Ride = () => {
  return (
    <div style={{backgroundColor:"red"}}>
      <h1>Book a Ride</h1>
      <p>Choose your destination and get a ride now!</p>
    </div>
  );
};

export default Ride;


// import React, { useState } from 'react';

// const Ride = () => {
//   const [destination, setDestination] = useState('');
//   const [carType, setCarType] = useState('');

//   const handleBooking = () => {
//     // Handle the booking process
//     console.log(`Destination: ${destination}, Car Type: ${carType}`);
//   };

//   return (
//     <div>
//       <h1>Book a Ride</h1>
//       <input
//         type="text"
//         placeholder="Enter destination"
//         value={destination}
//         onChange={(e) => setDestination(e.target.value)}
//       />
//       <select value={carType} onChange={(e) => setCarType(e.target.value)}>
//         <option value="">Select Car Type</option>
//         <option value="Standard">Standard</option>
//         <option value="Luxury">Luxury</option>
//         {/* Add more car options */}
//       </select>
//       <button onClick={handleBooking}>Book Now</button>
//     </div>
//   );
// };

// export default Ride;
