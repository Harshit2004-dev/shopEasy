import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>🛒 Your cart is empty.</h2>;
  }

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
            <p>Quantity: {item.quantity}</p>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
