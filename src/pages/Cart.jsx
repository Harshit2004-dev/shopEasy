import React, { useContext, } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import './Cart.css';

const Cart = () => {

  const navigate = useNavigate();
  const { cartItems, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>🛒 Your cart is empty.</h2>;
  }

  // const handleBuyNow = () => {
  //   const currentUser = JSON.parse(localStorage.getItem("logged_in_user"));
  //   if (!currentUser) {
  //     alert("Please login first");
  //     return;
  //   }

  //   const profileKey = `user_profile_${currentUser.mobile}`;
  //   const profile = JSON.parse(localStorage.getItem(profileKey));

  //   if (!profile || !profile.address || !profile.pincode) {
  //     alert("Please complete your profile before Buy the product!☺☺");
  //     navigate("/shopEasy/profile");
  //     return;
  //   }

  //   navigate("/shopEasy/checkout");
  // };

  const handleBuyNow = () => {
    const currentUser = JSON.parse(localStorage.getItem("logged_in_user"));

    if (!currentUser || !currentUser.mobile) {
      alert("Please login first");
      return;
    }

    const profileKey = `user_profile_${currentUser.mobile}`;
    const profile = JSON.parse(localStorage.getItem(profileKey));

    if (!profile || !profile.address || !profile.pincode) {
      alert("Please complete your profile before buying the product!");
      navigate("/shopEasy/profile");
      return;
    }

    // ✅ SAVE CART FOR CHECKOUT
    const cartKey = `current_cart_${currentUser.mobile}`;
    localStorage.setItem(cartKey, JSON.stringify(cartItems));

    // ✅ GO TO CHECKOUT
    navigate("/shopEasy/checkout");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart</h1>

      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "15px",
            borderBottom: "1px solid #ccc",
            paddingBottom: "10px",
          }}
        >
          <img src={item.img} alt={item.name} style={{ width: "80px", borderRadius: "8px" }} />

          <div style={{ flex: 1 }}>
            <h3>{item.name}</h3>
            <p>₹{item.price.toLocaleString()}</p>
            {item.size && (
              <p>Size: {item.size}</p>
            )}



            {/* Quantity Buttons */}
            <div className="qty-box">
              <button onClick={() => decreaseQty(item.id, item.size)} className="qty-btn minus">-</button>

              <div className="qty-number">{item.quantity}</div>

              <button onClick={() => increaseQty(item.id, item.size)} className="qty-btn plus">+</button>
            </div>

          </div>

          <button onClick={() => removeFromCart(item.id, item.size)} className="btn-car">
            Remove
          </button>

        </div>
      ))}

      <button className="buy-btn" onClick={handleBuyNow}>Buy Now</button>
    </div>
  );
};

export default Cart;
