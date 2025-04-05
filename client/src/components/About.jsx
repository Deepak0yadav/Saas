import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  
  return (
    <div className="container my-5 py-5 text-center" style={{marginLeft:"129px"}}>
      <div className="mb-5">
        <h1 className="fw-bold text-primary">About Us</h1>
        <p className="lead text-muted">
          Your trusted platform for buying and selling YouTube channels securely and transparently.
        </p>
      </div>

      {/* Who We Are Section */}
      <div className="d-flex flex-column align-items-center mb-4">
        <h2 className="fw-semibold">Who We Are</h2>
        <p className="text-muted w-75">
          We are a team of digital experts dedicated to helping content creators and investors 
          navigate the world of YouTube channel transactions with ease.
        </p>
      </div>

      {/* Why Sell Your Channel */}
      <div className="bg-light p-4 rounded shadow mb-4 w-75 mx-auto">
        <h2 className="fw-semibold mb-3">Why Sell Your YouTube Channel?</h2>
        <ul className="list-unstyled">
          <li className="mb-2">📈 Monetize the hard work you've put into growing an audience.</li>
          <li className="mb-2">🎯 Move on to new projects or career opportunities.</li>
          <li>🔄 Transfer ownership of an established brand to a new creator.</li>
        </ul>
      </div>

      {/* How It Works */}
      <div className="d-flex flex-column align-items-center mb-4">
        
        <h2 className="fw-semibold">How It Works</h2>
        <ol className="text-muted text-start w-50">
          <li><strong>List Your Channel:</strong> Submit details like subscribers, niche, and revenue.</li>
          <li><strong>Find a Buyer:</strong> Get connected with interested buyers.</li>
          <li><strong>Secure Transaction:</strong> We assist with safe payments and ownership transfer.</li>
        </ol>
      </div>

      {/* Why Choose Us */}
      <div className="bg-light p-4 rounded shadow mb-4 w-75 mx-auto">
        <h2 className="fw-semibold mb-3">Why Choose Us?</h2>
        <div className="d-flex justify-content-center flex-wrap">
          <div className="m-3">
            <h5>✅ Trusted Platform</h5>
            <p className="text-muted">We verify sellers and buyers to ensure security.</p>
          </div>
          <div className="m-3">
            <h5>🔐 Secure Transactions</h5>
            <p className="text-muted">Safe payment handling for peace of mind.</p>
          </div>
          <div className="m-3">
            <h5>📞 Expert Support</h5>
            <p className="text-muted">Our team guides you through the entire process.</p>
          </div>
        </div>
      </div>

      {/* Get Started Section */}
      <div>
        <h2 className="fw-semibold">Get Started Today!</h2>
        <p className="text-muted w-75 mx-auto">
          Whether you’re looking to buy or sell a YouTube channel, our platform makes it 
          easy and secure. Contact us today to learn more or browse available listings!
        </p>
         
      </div>
    </div>
  );
};

export default About;
