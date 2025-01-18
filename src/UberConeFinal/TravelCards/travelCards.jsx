// import React from "react";
// import "./travelCards.css";

// const TravelCards = () => {
//   const cards = [
//     {
//       title: "Ride Options",
//       description: "There’s more than one way to move with Uber, no matter where you are or where you’re headed next.",
//       buttonLabel: "Search ride options",
//       imgUrl: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_384,w_384/v1692743834/assets/54/f60161-cf6b-4401-a309-8bb196c0014c/original/U_CoastalCalifornia_White_Final-%281%29.jpg", // Replace with your image URL
//     },
//     {
//       title: "700+ Airports",
//       description: "You can request a ride to and from most major airports. Schedule a ride for one less thing to worry about.",
//       buttonLabel: "Search airports",
//       imgUrl: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_384,w_384/v1692743890/assets/f9/ba27c4-665c-4cca-8161-9e3f87f49994/original/Airport-rides.png" // Replace with your image URL
//     },
//     {
//       title: "10,000+ Cities",
//       description: "The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home.",
//       buttonLabel: "Search cities",
//       imgUrl: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_384,w_384/v1689609697/assets/b8/c39de0-6e13-485b-ba45-66511170c62a/original/SS_Commuter.jpg", // Replace with appropriate image URL", // Replace with your image URL
//     },
//   ];

//   return (
//     <div className="travel-cards-container">
//       <h2>Use the Uber app to help you travel your way</h2>
//       <div className="cards">
//         {cards.map((card, index) => (
//           <div key={index} className="card">
//             <img src={card.imgUrl} alt={card.title} />
//             <h3>{card.title}</h3>
//             <p>{card.description}</p>
//             <button>{card.buttonLabel}</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TravelCards;






import React from "react";
import { useNavigate } from "react-router-dom";
import "./travelCards.css";

const TravelCards = () => {
  const navigate = useNavigate(); // Hook for navigation

  const cards = [
    {
      title: "Ride Options",
      description: "There’s more than one way to move with Uber, no matter where you are or where you’re headed next.",
      buttonLabel: "Search ride options",
      imgUrl: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_384,w_384/v1692743834/assets/54/f60161-cf6b-4401-a309-8bb196c0014c/original/U_CoastalCalifornia_White_Final-%281%29.jpg",
      navigateTo: "/ride-options", // Route for this card
    },
    {
      title: "700+ Airports",
      description: "You can request a ride to and from most major airports. Schedule a ride for one less thing to worry about.",
      buttonLabel: "Search airports",
      imgUrl: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_384,w_384/v1692743890/assets/f9/ba27c4-665c-4cca-8161-9e3f87f49994/original/Airport-rides.png",
      navigateTo: "/airports", // Route for this card
    },
    {
      title: "10,000+ Cities",
      description: "The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home.",
      buttonLabel: "Search cities",
      imgUrl: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_384,w_384/v1689609697/assets/b8/c39de0-6e13-485b-ba45-66511170c62a/original/SS_Commuter.jpg",
      navigateTo: "/cities", // Route for this card
    },
  ];

  return (
    <div className="travel-cards-container">
      <h2>Use the Uber app to help you travel your way</h2>
      <div className="cards">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <img src={card.imgUrl} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button onClick={() => navigate(card.navigateTo)}>{card.buttonLabel}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelCards;
