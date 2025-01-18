import React from "react";
import "../ridewithFriends/ridewithFriends.css";

const RideWithFriends = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center g-4">
        <div className="col-md-6 text-center">
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_311,w_552/v1683576635/assets/f7/7aa380-a378-47bf-8b88-aaba1587efdd/original/landing-stops-group-rides.png"
            alt="Group Ride"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold">Ride with friends seamlessly</h2>
          <p>
            Riding with friends just got easier: set up a group ride in the Uber
            app, invite your friends, and arrive at your destination. Friends
            who ride together save together.
          </p>
          <a href="#learn-more" className="btn btn-outline-dark">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default RideWithFriends;
