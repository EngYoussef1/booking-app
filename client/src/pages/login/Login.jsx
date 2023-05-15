import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };


  return (
    <div className="login">
      <span className="registerTitle">Login</span>
      <div className="lContainer">
      <label>Username</label>
        <input
          type="text"
          placeholder="Enter Your Username..."
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <label>password</label>
        <input
          type="password"
          placeholder="Enter Your Password..."
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        <button className="registerLoginButton">
        <Link to="/Register" className="linkRegister">
          Register
        </Link>
      </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
