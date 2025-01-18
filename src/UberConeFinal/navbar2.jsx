// import React from "react";
// // import "./Navbar.css";
// import "./navbar2.css"
// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="logo">Uber</div>
//       <div className="links">
//         <a href="#ride">Request a ride</a>
//         <a href="#reserve">Reserve a ride</a>
//         <a href="#prices">See prices</a>
//         <a href="#options">Explore ride options</a>
//       </div>
//       <div className="actions">
//         <span>EN</span>
//         <a href="#help">Help</a>
//         <a href="#login">Log in</a>
//         <button className="signup">Sign up</button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import { Nav,Link, NavLink} from "react-router-dom";
import "./navbar2.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Uber</div>
      <div className="links">
        {/* <NavLink to="/ride">Request a ride</NavLink> */}
        <Link to="/reserve">Reserve a ride</Link>
        <Link to="/prices">See prices</Link>
        <Link to="/options">Explore ride options</Link>
      </div>
      <div className="actions">
        <span>EN</span>
        <Link to="/help">Help</Link>
        <Link to="/login">Log in</Link>
        <button className="signup">Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;




