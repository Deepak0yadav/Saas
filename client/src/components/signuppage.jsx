import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  return (
    <div className="container my-5 py-5 d-flex justify-content-center"style={{marginLeft:"400px"}} >
      <div className="bg-light p-5 rounded shadow w-50 text-center">
        <h1 className="fw-bold text-primary mb-4">Sign Up</h1>
        <p className="text-muted">Create an account to get started.</p>

        <form className="text-start">
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" placeholder="Enter your full name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Create a password" />
          </div>
          <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        </form>

        <p className="mt-3 text-muted">
          Already have an account? <a href="/login" className="text-primary">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;