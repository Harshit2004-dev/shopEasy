import { useState ,useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./CheckOtp.css";
import { CartContext } from "../context/CartContext";


const VerifyOtp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const { refreshCart } = useContext(CartContext);
  const handleVerify = () => {
    const savedOtp = localStorage.getItem("temp_otp");
    const mobile = localStorage.getItem("temp_mobile");

    if (otp === savedOtp) {
      localStorage.setItem(
        "logged_in_user",
        JSON.stringify({ mobile })
      );

      const savedCart = localStorage.getItem("cart_" + mobile);
      localStorage.setItem("current_cart", savedCart || "[]");

      localStorage.removeItem("temp_otp");
      localStorage.removeItem("temp_mobile");

      refreshCart();
      navigate("/");

      // window.location.reload();
    } else {
      alert("Wrong OTP! Try again.");
    }
  };

  return (
    <div className="verify-container">
      <div className="verify-card">

        <h2 className="verify-title">Enter OTP</h2>

        <input
          type="text"
          className="verify-input"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <button className="verify-btn" onClick={handleVerify}>
          Verify OTP
        </button>

      </div>
    </div>
  );
};

export default VerifyOtp;
