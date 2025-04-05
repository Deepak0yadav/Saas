import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
     
  return (
    <div className="container my-5 py-5 d-flex justify-content-center"style={{marginLeft:"370px"}} >
      <div className="bg-light p-5 rounded shadow w-50 text-center">
        <h1 className="fw-bold text-primary mb-4">Login</h1>
        <p className="text-muted">Enter your credentials to access your account.</p>

        <form className="text-start">
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter your password" />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>

        <p className="mt-3 text-muted">
          Don't have an account? <a href="/signuppage" className="text-primary"  >Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
