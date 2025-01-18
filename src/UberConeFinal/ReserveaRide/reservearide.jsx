import React, { useState } from "react";
import "./reserveARide.css"
// import "../uberConeFinal/ReserveaRide/reserveARide.css"
// import "./reserverARide.css"

const RideForm = ({ onSearch }) => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pickup && dropoff) {
      onSearch({ pickup, dropoff });
    } else {
      alert("Please enter both Pickup and Dropoff locations!");
    }
  };

  return (
    <div className="ride-form-container">
      <h1 className="form-title">Book Your Ride</h1>
      <form onSubmit={handleSubmit}>
        <label className="form-label">Pickup Location:</label>
        <input
          type="text"
          placeholder="Enter pickup location"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          className="form-input"
        />

        <label className="form-label">Dropoff Location:</label>
        <input
          type="text"
          placeholder="Enter dropoff location"
          value={dropoff}
          onChange={(e) => setDropoff(e.target.value)}
          className="form-input"
        />

        <button type="submit" className="form-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default RideForm;
