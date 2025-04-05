import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactUs = () => {
    
  return (
    <div className="container my-5 py-5 text-center"style={{marginLeft:"250px"}} >
      <h1 className="fw-bold text-primary mb-4">Contact Us</h1>
      <p className="text-muted w-75 mx-auto">
        Have questions or need assistance? Reach out to us and our team will get back to you as soon as possible.
      </p>
      
      <div className="bg-light p-4 rounded shadow w-75 mx-auto mt-4">
        <h2 className="fw-semibold mb-3">Get in Touch</h2>
        <form className="text-start w-75 mx-auto">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="Enter your name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" rows="4" placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">Send Message</button>
        </form>
      </div>

      <div className="d-flex justify-content-center flex-wrap mt-5">
        <div className="m-3">
          <h5>📍 Our Location</h5>
          <p className="text-muted">1234 Business Street, City, Country</p>
        </div>
        <div className="m-3">
          <h5>📞 Call Us</h5>
          <p className="text-muted">+123 456 7890</p>
        </div>
        <div className="m-3">
          <h5>📧 Email Us</h5>
          <p className="text-muted">support@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
