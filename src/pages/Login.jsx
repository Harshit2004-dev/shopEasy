import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'

const Login = () => {
    const navigate = useNavigate();
    const [mobile, setMobile] = useState("+91 ");

    const handleSendOtp = () => {
        if (mobile.length !== 14) {
            alert("Enter a valid 10-digit mobile number");
            return;
        }
        else if (!["6", "7", "8", "9"].includes(mobile[4])) {
            alert("Mobile number must start with 6, 7, 8, or 9");
            return;
        }


        // Generate OTP
        const otp = Math.floor(1000 + Math.random() * 9000);

        // Save mobile + OTP in localStorage
        localStorage.setItem("temp_mobile", mobile);
        localStorage.setItem("temp_otp", otp.toString());

        alert("Your OTP is: " + otp); // show OTP (because no backend)
        navigate("/shopEasy/verify-otp");
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">Login</h2>

                <input
                    type="text"
                    className="login-input"
                    placeholder="Enter Mobile Number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                />

                <button className="login-btn" onClick={handleSendOtp}>
                    Send OTP
                </button>
            </div>
        </div>
    );
};

export default Login;
