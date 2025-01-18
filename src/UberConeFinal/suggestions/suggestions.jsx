// import React from "react";
// import "../suggestions/suggestions.css";

// const Suggestions = () => {
//   return (
//     <div className="container my-5">
//       <h2 className="fw-bold text-center">Suggestions</h2>
//       <div className="row g-4">
//         {/* Suggestion Card: Ride */}
//         <div className="col-md-4">
//           <div className="card border-0 shadow-sm p-3 text-center">
//             <img
//               src="https://mobile-content.uber.com/launch-experience/ride.png"
//               alt="Ride"
//               className="card-img-top mx-auto img-fluid"
//             />
//             <div className="card-body">
//               <h5 className="card-title">Ride</h5>
//               <p className="card-text">
//                 Go anywhere with Uber. Request a ride, hop in, and go.
//               </p>
//               <a href="#details" className="btn btn-outline-dark">
//                 Details
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Suggestion Card: Courier */}
//         <div className="col-md-4">
//           <div className="card border-0 shadow-sm p-3 text-center">
//             <img
//               src="https://cn-geo1.uber.com/static/mobile-content/Courier.png"
//               alt="Courier"
//               className="card-img-top mx-auto img-fluid"
//             />
//             <div className="card-body">
//               <h5 className="card-title">Courier</h5>
//               <p className="card-text">
//                 Uber makes same-day item delivery easier than ever.
//               </p>
//               <a href="#details" className="btn btn-outline-dark">
//                 Details
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Suggestion Card: Reserve */}
//         <div className="col-md-4">
//           <div className="card border-0 shadow-sm p-3 text-center">
//             <img
//               src="https://mobile-content.uber.com/uber_reserve/reserve_clock.png"
//               alt="Reserve"
//               className="card-img-top mx-auto img-fluid"
//             />
//             <div className="card-body">
//               <h5 className="card-title">Reserve</h5>
//               <p className="card-text">
//                 Reserve your ride in advance so you can relax on the day of your
//                 trip.
//               </p>
//               <a href="#details" className="btn btn-outline-dark">
//                 Details
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Suggestions;


import React from "react";
import { Link } from "react-router-dom";
import "./suggestions.css";

const Suggestions = () => {
  return (
    <div className="container my-5">
      <h2 className="fw-bold text-center">Suggestions</h2>
      <div className="row g-4">
        {/* Suggestion Card: Ride */}
        <div className="col-md-4">
          <div className="card border-0 shadow-sm p-3 text-center">
            <img
              src="https://mobile-content.uber.com/launch-experience/ride.png"
              alt="Ride"
              className="card-img-top mx-auto img-fluid"
            />
            <div className="card-body">
              <h5 className="card-title">Ride</h5>
              <p className="card-text">
                Go anywhere with Uber. Request a ride, hop in, and go.
              </p>
              <Link to="/ride-details" className="btn btn-outline-dark">
                Details
              </Link>
            </div>
          </div>
        </div>

        {/* Suggestion Card: Courier */}
        <div className="col-md-4">
          <div className="card border-0 shadow-sm p-3 text-center">
            <img
              src="https://cn-geo1.uber.com/static/mobile-content/Courier.png"
              alt="Courier"
              className="card-img-top mx-auto img-fluid"
            />
            <div className="card-body">
              <h5 className="card-title">Courier</h5>
              <p className="card-text">
                Uber makes same-day item delivery easier than ever.
              </p>
              <Link to="/courier-details" className="btn btn-outline-dark">
                Details
              </Link>
            </div>
          </div>
        </div>

        {/* Suggestion Card: Reserve */}
        <div className="col-md-4">
          <div className="card border-0 shadow-sm p-3 text-center">
            <img
              src="https://mobile-content.uber.com/uber_reserve/reserve_clock.png"
              alt="Reserve"
              className="card-img-top mx-auto img-fluid"
            />
            <div className="card-body">
              <h5 className="card-title">Reserve</h5>
              <p className="card-text">
                Reserve your ride in advance so you can relax on the day of your
                trip.
              </p>
              <Link to="/reserve-details" className="btn btn-outline-dark">
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;

