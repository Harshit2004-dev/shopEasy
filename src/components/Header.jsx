import { Link } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import cart_image from "../assets/cart_image.png"

const Header = () => {

  const { cartCount } = useContext(CartContext);

  return (
    <header className="header">
      <h1 className="logo">ShopEase</h1>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/cart" className="cart-link">
          Cart <img src={cart_image} alt="cart image"  style={{height:"18.5px"}}/>
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
      </nav>
    </header>
  );
};

export default Header;



