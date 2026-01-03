import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
  // CART
  const cartItems = JSON.parse(localStorage.getItem("current_cart")) || [];
  setCart(cartItems);

  const sum = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );
  setTotal(sum);

  // USER PROFILE
  const currentUser = JSON.parse(localStorage.getItem("logged_in_user"));
  if (!currentUser?.mobile) return;

  const profileKey = `user_profile_${currentUser.mobile}`;
  const profile = JSON.parse(localStorage.getItem(profileKey));
  setUser(profile);
}, []);


  const placeOrder = () => {
    const currentUser = JSON.parse(localStorage.getItem("logged_in_user"));
    if (!currentUser?.mobile) {
      alert("Please login first");
      return;
    }

    if (!cart.length) {
      alert("Cart is empty");
      return;
    }

    if (!user || !user.address || !user.pincode) {
      alert("Please complete your profile");
      navigate("/shopEasy/profile");
      return;
    }

    const order = {
      orderId: Date.now(),
      items: cart,
      totalAmount: total,
      deliveryAddress: user,
      status: "Order Placed",
      orderedAt: new Date().toLocaleString(),
    };

    const ordersKey = `orders_${currentUser.mobile}`;
    const orders = JSON.parse(localStorage.getItem(ordersKey)) || [];
    orders.push(order);
    localStorage.setItem(ordersKey, JSON.stringify(orders));

    // Clear cart
    localStorage.removeItem(`current_cart_${currentUser.mobile}`);

    navigate("/shopEasy/order-success");
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      {/* ITEMS */}
      <div className="checkout-section">
        <h3>Items</h3>
        {cart.map((item) => (
          <div key={item.id} className="checkout-item">
            <img src={item.img} alt={item.name} />
            <div>
              <p>{item.name}</p>
              <strong>₹{item.price}</strong>
            </div>
          </div>
        ))}
        <h3>Total: ₹{total}</h3>
      </div>

      {/* ADDRESS */}
      <div className="checkout-section">
        <h3>Delivery Address</h3>
        {user && user.address ? (
          <>
            <p>{user.name}</p>
            <p>{user.address}, {user.city}</p>
            <p>{user.state} - {user.pincode}</p>
            <p>📞 {user.mobile}</p>
          </>
        ) : (
          <>
            <p style={{ color: "red" }}>Profile not completed</p>
            <button onClick={() => navigate("/shopEasy/profile")}>
              Complete Profile
            </button>
          </>
        )}
      </div>

      <div className="checkout-footer">
        <button className="place-order-btn" onClick={placeOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
