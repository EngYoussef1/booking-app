import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    if (user != null) {
      navigate("/login");
    }
  };
  const handleRegisterClick = () => {
    if (user == null) {
      navigate("/register");
    }
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Booking App</span>
        </Link>
        {user ? (
          user.username
        ) : (
          <div className="navItems">
            <button onClick={handleRegisterClick} className="navButton">
              Register
            </button>
            <button onClick={handleLoginClick} className="navButton">
              <Link to="/login" className="link">
                Login
              </Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
