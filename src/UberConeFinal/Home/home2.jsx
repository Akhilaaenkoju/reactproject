import React from "react";
import uberImage from '../../assets/images/uberhome.jpg';
// import "./home2.css"
import "./home2.module.css"
//import LocationInput from "../locationinput";
//import uberImage from "../assets/images/uberhome.jpg";
//"D:\React_Project\my-app\src\assets\images\uberhome.jpg"
//import "./home.css";
import Suggestions from "../suggestions/suggestions";
import TravelCards from "../TravelCards/travelCards";
import BusinessSolutions from "../BusinessSolutions/businessSolution";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home">
          <div className="content">
            <h1>Request a ride for now or later</h1>
            <p>Add your trip details, hop in, and go.</p>
          </div>
          <div className="image-container">
            <img src={uberImage} alt="Uber illustration" />
          </div>
        </div>

        <Suggestions />
        <TravelCards />
        <BusinessSolutions />
      </div>
    </>
  );
};

export default Home;

 
