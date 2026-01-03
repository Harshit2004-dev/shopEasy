import React, { useEffect, useState } from "react";
import "./ProfileUser.css";
import { Link, useNavigate } from "react-router-dom";
const emptyProfile = {
  name: "",
  email: "",
  mobile: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
};

const ProfileUser = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(emptyProfile);
 const navigate = useNavigate();
 
   useEffect(() => {
  const currentUser = JSON.parse(localStorage.getItem("logged_in_user"));
  if (!currentUser?.mobile) return;

  const profileKey = `user_profile_${currentUser.mobile}`;
  const savedProfile = JSON.parse(localStorage.getItem(profileKey));

  if (savedProfile) {
    setUser(savedProfile);
    setFormData(savedProfile);
  } else {
    // First-time user
    const initialProfile = {
      ...emptyProfile,
      mobile: currentUser.mobile,
    };
    setUser(initialProfile);
    setFormData(initialProfile);
  }
}, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSave = () => {
  //   const currentUser = JSON.parse(localStorage.getItem("current_user"));
  //   const profileKey = `user_profile_${currentUser.mobile}`;

  //   localStorage.setItem(profileKey, JSON.stringify(formData));
  //   setUser(formData);
  //   setEditMode(false);
  // };
 
  const handleSave = () => {
  const currentUser = JSON.parse(localStorage.getItem("logged_in_user"));
  if (!currentUser?.mobile) return;

  const profileKey = `user_profile_${currentUser.mobile}`;

  localStorage.setItem(profileKey, JSON.stringify(formData));
  setUser(formData);
  setEditMode(false);
   navigate("/shopEasy/checkout");
};

   return (
    <div className="profile-page">
      <div className="profile-card">

        <div className="profile-header">
          <div className="avatar">
            {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
          </div>
          <h2>{user?.name || "Your Name"}</h2>
          <p className="role">ShopEasy Customer</p>
        </div>

        {user ? (
          <div className="profile-info">
            <Info label="Email" value={user.email || "-"} />
            <Info label="Mobile" value={user.mobile || "-"} />
            <Info label="Address" value={user.address || "-"} />
            <Info label="City" value={user.city || "-"} />
            <Info label="State" value={user.state || "-"} />
            <Info label="Pincode" value={user.pincode || "-"} />
          </div>
        ) : (
          <p style={{ textAlign: "center", color: "#888" }}>
            Please complete your profile
          </p>
        )}

        <button className="edit-btn" onClick={() => setEditMode(true)}>
          {user ? "Edit Profile" : "Complete Profile"}
        </button>
      </div>

      {/* MODAL */}
      {editMode && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Profile</h3>

            <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
            <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <input name="mobile" placeholder="Mobile" value={formData.mobile} disabled />
            <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
            <input name="city" placeholder="City" value={formData.city} onChange={handleChange} />
            <input name="state" placeholder="State" value={formData.state} onChange={handleChange} />
            <input name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} />

            <div className="modal-actions">
              <button className="save-btn" onClick={handleSave}>Save</button>
              <button className="cancel-btn" onClick={() => setEditMode(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

const Info = ({ label, value }) => (
  <div className="info-row">
    <span>{label}</span>
    <span>{value}</span>
  </div>
);

export default ProfileUser;
