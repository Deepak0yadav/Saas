import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/About"); // Navigate to the About page
  };
  const handleClick2 = () => {
    navigate("/contactpage"); // Navigate to the About page
  };
  const handleClick3 = () => {
    navigate("/SellingPageBody"); // Navigate to the About page
  };
  const handleClick4 = () => {
    navigate("/loginpage"); // Navigate to the About page
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Left Side Menu */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>

          {/* Middle Buttons (Sell Now, Meet Broker, etc.) */}
          <div className="d-flex gap-3">
            <button className="btn btn-warning mx-2"onClick={handleClick3} >Sell Now</button>
            <button className="btn btn-info mx-2" >Buy Now</button>
            <button className="btn btn-secondary mx-2" onClick={handleClick}>About Us</button>
            <button className="btn btn-primary btn-lg mx-2"onClick={handleClick2} >Contact Us</button>
          </div>

          {/* Right Side (Search + Login) */}
          <div className="d-flex align-items-center ms-auto gap-3">
            {/* Login & Sign Up Buttons */}
            <div className="d-flex gap-2">
              <button className="btn btn-outline-primary" onClick={handleClick4}>Login</button>
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
