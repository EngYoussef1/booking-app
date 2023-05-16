// importing React
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// importing other components

// importing style sheet
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    setError(false);
    try {
      await axios.post("/auth/register", {
        username,
        email,
        password,
        country,
        city,
        phone
      });
      navigate("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={submitHandler}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter Your Username..."
          onChange={(event) => setUsername(event.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Your Email..."
          onChange={(event) => setEmail(event.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Your Password..."
          onChange={(event) => setPassword(event.target.value)}
        />
        <label>Country</label>
        <input
          type="text"
          placeholder="Enter Your Country..."
          onChange={(event) => setCountry(event.target.value)}
        />
        <label>City</label>
        <input
          type="text"
          placeholder="Enter Your City..."
          onChange={(event) => setCity(event.target.value)}
        />
        <label>Phone</label>
        <input
          type="text"
          placeholder="Enter Your Phone..."
          onChange={(event) => setPhone(event.target.value)}
           />

        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link to="/login" className="linkLogin">
          Login
        </Link>
      </button>
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          The Registration Failed!!!!
        </span>
      )}
    </div>
  );
}
