import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [vehicle_registration, setVehicleRegistration] = useState("");
  const [profile_picture, setProfilePicture] = useState("");
  const [id_number, setIdNumber] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      // Cleanup function for ongoing fetch request if the component is unmounted
      if (isLoading) {
        // Cancel the fetch request if it's still loading
        setIsLoading(false);
      }
    };
  }, [isLoading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Clear any previous error message
    setIsLoading(true);

    // Perform form validation here (e.g., check for valid email format, strong password, etc.)
    // If validation passes, proceed with form submission

    fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone_number,
        address,
        password,
        vehicle_registration,
        profile_picture,
        id_number,
        status,
      }),
    })
      .then((r) => {
        if (r.ok) {
          return r.json();
        } else {
          throw new Error("Failed to register.");
        }
      })
      .then((user) => {
        setIsLoading(false);
        navigate("/merchant");
        console.log("Registration successful:", user);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(
          "Failed to register. Please check your details and try again."
        );
        console.error("Registration error:", error.message);
      });
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="col-md-12 col-lg-6 login-right">
        <div className="login-header">
          <h3 className="text-center">
            Welcome to <span className="fw-bold" style={{color: "rgb(0, 119, 255)"}}>mashPlannr</span>
          </h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 form-focus">
            <input
              type="name"
              className="form-control floating"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="focus-label" htmlFor="username">
              Name
            </label>
          </div>
          <div className="mb-3 form-focus">
            <input
              type="email"
              className="form-control floating"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="focus-label" htmlFor="email">
              Email
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
          <div className="mb-3 form-focus">
            <input
              type="text"
              className="form-control floating"
              id="phoneNumber"
              name="phoneNumber"
              value={phone_number}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <label className="focus-label" htmlFor="phoneNumber">
              Phone Number
            </label>
          </div>
          <div className="mb-3 form-focus">
            <input
              type="text"
              className="form-control floating"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <label className="focus-label" htmlFor="address">
              Address
            </label>
          </div>
          <div className="mb-3 form-focus">
            <input
              type="text"
              className="form-control floating"
              id="vehicleRegistration"
              name="vehicleRegistration"
              value={vehicle_registration}
              onChange={(e) => setVehicleRegistration(e.target.value)}
            />
            <label className="focus-label" htmlFor="vehicleRegistration">
              Vehicle Registration
            </label>
          </div>
          <div className="mb-3 form-focus">
            <input
              type="text"
              className="form-control floating"
              id="profilePicture"
              name="profilePicture"
              value={profile_picture}
              onChange={(e) => setProfilePicture(e.target.value)}
            />
            <label className="focus-label" htmlFor="profilePicture">
              Profile Picture Link
            </label>
          </div>
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
              ID Number
            </label>
          </div>
          <div className="mb-3 form-focus">
            <input
              type="text"
              className="form-control floating"
              id="status"
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
            <label className="focus-label" htmlFor="status">
              Status
            </label>
          </div>

          {error && <p className="text-danger">{error}</p>}

          <button
            className="btn btn-primary w-100 btn-lg login-btn"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>
        </form>
        <p>
          Already have an account? &nbsp;
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
