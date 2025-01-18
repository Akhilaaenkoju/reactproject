// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./navbar2";
// // import Home from "./home2";
// import Home from "./Home/home2";
// import Suggestions from "./suggestions/suggestions";
// import RideWithFriends from "./ridewithFriends/ridewithFriends";
// import TravelCards from "../UberConeFinal/TravelCards/travelCards";
// import BusinessSolutions from "../UberConeFinal/BusinessSolutions/businessSolution";
// import Ride from "./suggestions/RideDetails/rideDetatils";
// import Reserve from "./ReserveaRide/reservearide";
// import Prices from "./NavItems/prices";
// import Help from "./NavItems/help";
// import Login from "./NavItems/login";
// import RideDetails from "./suggestions/RideDetails/rideDetatils";
// import CourierDetails from "./suggestions/Courier/courier";
// import ReserveDetails from "./suggestions/Reserve/reserve";
// import "./app.css";

// const App = () => {
//   return (
//     <>
//       <Router>
//         <Navbar />
//         <Routes>
//           {/* Existing Routes */}
//           <Route path="/" element={<Home />} />
//           <Route path="/ride" element={<Ride />} />
//           <Route path="/reserve" element={<Reserve />} />
//           <Route path="/prices" element={<Prices />} />
//           <Route path="/help" element={<Help />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/suggestions" element={<Suggestions />} />
//           <Route path="/ridewithfriends" element={<RideWithFriends />} />
//           <Route path="/travelcards" element={<TravelCards />} />
//           <Route path="/businesssolutions" element={<BusinessSolutions />} />

//           {/* New Routes for Ride, Courier, and Reserve Details */}
//           <Route path="/ride-details" element={<RideDetails />} />
//           <Route path="/courier-details" element={<CourierDetails />} />
//           <Route path="/reserve-details" element={<ReserveDetails />} />
//         </Routes>
//       </Router>
//     </>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar2";
// Existing imports
import Home from "./Home/home2";
import Suggestions from "./suggestions/suggestions";
import RideWithFriends from "./ridewithFriends/ridewithFriends";
import TravelCards from "../UberConeFinal/TravelCards/travelCards";
import BusinessSolutions from "../UberConeFinal/BusinessSolutions/businessSolution";
import Ride from "./suggestions/RideDetails/rideDetatils";
import Reserve from "./ReserveaRide/reservearide";
import Prices from "./NavItems/prices";
import Help from "./NavItems/help";
import Login from "./NavItems/login";
import RideDetails from "./suggestions/RideDetails/rideDetatils";
import CourierDetails from "./suggestions/Courier/courier";
import ReserveDetails from "./suggestions/Reserve/reserve";
// New imports for TravelCards routes
import RideOptions from "./TravelCards/RideOptions/rideOptions";
import Airports from "./TravelCards/Airports/airports";
import Cities from "./TravelCards/Cites/cites";
import "./app.css";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* Existing Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/ride" element={<Ride />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/help" element={<Help />} />
          <Route path="/login" element={<Login />} />
          <Route path="/suggestions" element={<Suggestions />} />
          <Route path="/ridewithfriends" element={<RideWithFriends />} />
          <Route path="/travelcards" element={<TravelCards />} />
          <Route path="/businesssolutions" element={<BusinessSolutions />} />
          <Route path="/ride-details" element={<RideDetails />} />
          <Route path="/courier-details" element={<CourierDetails />} />
          <Route path="/reserve-details" element={<ReserveDetails />} />

          {/* New Routes for TravelCards */}
          <Route path="/ride-options" element={<RideOptions />} />
          <Route path="/airports" element={<Airports />} />
          <Route path="/cities" element={<Cities />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;






