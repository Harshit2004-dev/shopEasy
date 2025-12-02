import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import cart_image from "../assets/cart_image.png";
import userLogo from "../assets/userLogo.png";

const Header = () => {
  const navigate = useNavigate();
  const { cartCount , clearCartOnLogout} = useContext(CartContext);
  const [open, setOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("logged_in_user"));

const handleLogout = () => {
  localStorage.removeItem("logged_in_user");
  clearCartOnLogout();
  // window.location.href = "/";
  navigate("/");

};

  return (
    <header className="header">
      <h1 className="logo">ShopEasy</h1>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shopEasy/about">About</Link>
        <Link to="/shopEasy/cart" className="cart-link">Cart
          <img src={cart_image} alt="cart image" style={{ height: "12.8px" }} />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>

        {user ? (
          // Profile dropdown code
          <div className="user-section">
            <img
              src={userLogo}
              alt="user"
              className="userlogo"
              onClick={() => setOpen(!open)}
            />
            {open && (
              <div className="user-dropdown">
                <div className="dropdown-item" onClick={() => navigate("/shopEasy/profile")}>Profile</div>
                <div className="dropdown-item logout" onClick={handleLogout}>Logout</div>
              </div>
            )}
          </div>
        ) : (
          <Link to="/shopEasy/login" className="login-link">Login</Link>
        )}
      </nav>


    </header>
  );
};

export default Header;
