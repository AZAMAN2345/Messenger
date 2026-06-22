import React from "react";
import { Link } from "react-router-dom";
import "../styles/Register.css";

function Register() {
  return (
    <div className="container">
      <div className="card">
        <h1>REGISTER</h1>

        <form>
          <div className="names">
            <input
              type="text"
              placeholder="First Name"
            />

            <input
              type="text"
              placeholder="Last Name"
            />
          </div>

          <input
            type="text"
            placeholder="Username"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <input
            type="password"
            placeholder="Confirm Password"
          />

          <div className="terms">
            <input type="checkbox" />
            <label>Terms & Privacy Policy</label>
          </div>

          <button className="button">
            Register
          </button>

          <p className="link">
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;