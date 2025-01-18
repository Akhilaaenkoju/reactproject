import React from "react";
import "./businessSolutions.css";

const BusinessSolutions = () => {
  return (
    <div className="container my-5 py-5 bg-black text-white">
      <div className="row align-items-center">
        {/* Content Section */}
        <div className="col-md-6">
          <h1 className="display-4 mb-4">Looking for business solutions?</h1>
          {/* <p className="mb-4">
            Get information about how companies leverage <a href="#" className="text-white text-decoration-underline">Uber for Business</a>:
          </p> */}
          <ul className="mb-4">
            <li>Business travel</li>
            <li>Courtesy rides</li>
            <li>Meal programs</li>
            <li>Item delivery</li>
          </ul>
          <div className="d-flex gap-3">
            <button className="btn btn-light">Get started</button>
            <button className="btn btn-outline-light">Check out our solutions</button>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-md-6">
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_324,w_576/v1691776332/assets/d6/48f5b6-bb5f-450e-8733-90aefecbd09e/original/U4B_Spot_U4BWebsite.jpg"
            alt="Illustration of business solutions"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessSolutions;
