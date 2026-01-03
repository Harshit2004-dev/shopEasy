import React from "react";
import { useNavigate } from "react-router-dom";
import "./OrderSuccess.css";

const OrderSucces = () => {
  const navigate = useNavigate();

  return (
    <div className="order-success-page">
      <div className="success-card">
        <div className="checkmark">✓</div>
        <h2>Order Placed Successfully!</h2>
        <p>Thank you for shopping with <strong>ShopEasy</strong>.</p>
        <p>Your order has been placed and will be delivered soon 🚚</p>

        <div className="success-actions">
          <button onClick={() => navigate("/shopEasy")}>
            Continue Shopping
          </button>
{/* 
          <button
            className="secondary-btn"
            onClick={() => navigate("/shopEasy/orders")}
          >
            View Orders
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default OrderSucces;
