import React, { useState } from "react";
import LoginForm from "./auth/LoginForm";
import RegisterForm from "./auth/RegisterForm";

function Login() {
  const [showLogin, setShowLogin] = useState(true);

  // Placeholder function for handling successful login
  const onLogin = (user) => {
    // Handle successful login here
    console.log("User logged in:", user);
  };

  return (
    <div>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <p>
            Don't have an account? &nbsp;
            <a onClick={() => setShowLogin(false)}>Sign Up</a>
          </p>
        </>
      ) : (
        <>
          <RegisterForm onLogin={onLogin} />
          {/* <p>
            Already have an account? &nbsp;
            <span onClick={() => setShowLogin(true)}>Login</span>
          </p> */}
        </>
      )}
    </div>
  );
}

export default Login;
