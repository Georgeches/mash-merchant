import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({ onLogin }) => {
  const [id_number, setIdNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  let screenWidth = window.screen.width

  const handleSubmit = function (e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id_number, password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to login.");
        }
      })
      .then((data) => {
        // Check the user_type returned from the server
        if (data.user_type === "admin") {
          // Redirect to the admin dashboard
          navigate("/admin/dashboard");
        } else if (data.user_type === "merchant") {
          // Redirect to the merchant dashboard
          navigate("/Merchpage");
        } else {
          // Handle other user types or unexpected responses
          throw new Error("Unknown user type.");
        }
      })
      .catch((error) => {
        // console.error("Error:", error);
      });
  };

  return (
    <div className="justify-content-center login-div" style={{ minHeight: "100vh", display: "flex", minWidth:`${screenWidth}px`}}>
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="login-right">
          <div className="login-header">
            <h3>
              Login <span></span>
            </h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 form-focus">
              <input
                type="text"
                className="form-control floating"
                id="idNumber"
                name="idNumber"
                value={id_number}
                onChange={(e) => setIdNumber(e.target.value)}
              />
              <label className="focus-label" htmlFor="idNumber">
                IdNumber
              </label>
            </div>
            <div className="mb-3 form-focus">
              <input
                type="password"
                className="form-control floating"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="focus-label" htmlFor="password">
                Password
              </label>
            </div>
            <div className="text-end">
              <a className="forgot-link" href="forgot-password.html">
                Forgot Password?
              </a>
            </div>
            <button
              className="btn btn-primary w-100 btn-lg login-btn"
              type="submit"
            >
              Login
            </button>
          </form>
          <p>
            Don't have an account? &nbsp;
            <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
