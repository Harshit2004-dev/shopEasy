import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state?.product;
  const [selectedImage, setSelectedImage] = useState(product?.img[0]);

  if (!product) {
    return <h2>Product not found — please go back to home.</h2>;
  }

  return (
    <div className="product-page">
      {/* Left Section - Images */}
      <div className="product-image-section">
        <img src={selectedImage} alt={product.name} className="main-image" />

        <div className="thumbnail-row">
          {product.img.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt="product view"
              className={`thumbnail ${selectedImage === imgSrc ? "active" : ""}`}
              onClick={() => setSelectedImage(imgSrc)}
            />
          ))}
        </div>
      </div>

      {/* Right Section - Product Details */}
      <div className="product-info-section">
        <h1>{product.name}</h1>
        <p className="rating">{product.rating}</p>

        <p className="price">
          ₹{product.price.toLocaleString()}{" "}
          <span className="offer">(-16%)</span>
        </p>
        <p className="strike">{product.product_offer}</p>
        <p className="emi">Inclusive of all taxes</p>
        <p className="emi">EMI starts at ₹3,243. No Cost EMI available</p>

        {/* Offers Section */}
        <div className="offers-section">
          <h4>Offers</h4>
          <ul>
            <li>💳 No Cost EMI: Save interest with select Credit Cards</li>
            <li>🏦 Cashback: Up to ₹2,000 on Amazon Pay balance</li>
            <li>💼 Partner Offers: Save up to 18% on business purchases</li>
          </ul>
        </div>

        {/* Delivery and Color Section */}
        <p className="delivery">{product.product_delivery}</p>
        <div className="color-options">
          <p>Available Colors:</p>
          <div
            className="color"
            style={{ backgroundColor: product.color_1 }}
          ></div>
          <div
            className="color"
            style={{ backgroundColor: product.color_2 }}
          ></div>
          <div
            className="color"
            style={{ backgroundColor: product.color_3 }}
          ></div>
        </div>

        <button className="buy-now-btn">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetails;
