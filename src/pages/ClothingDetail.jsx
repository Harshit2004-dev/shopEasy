import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { clothData } from "../data/ClothData";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import "./ClothingDetail.css";

const ClothDetail = () => {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);

    const product = clothData.find((p) => p.id === Number(id));

    const [imageChange, setImageChange] = useState(product.img)
    const [selectedSize, setSelectedSize] = useState(null);


    if (!product) return <h2 className="not-found">Product Not Found</h2>;

    return (
        <div className="product-wrapper">

            {/* LEFT IMAGE SECTION */}
            <div className="image-block">
                <img src={imageChange} alt={product.title} className="main-image" />

                <div className="preview-row">
                    {product.images.map((img, i) => (
                        <img key={i} src={img} alt="preview" className="preview-img" onClick={() => setImageChange(img)} />
                    ))}
                </div>
            </div>

            {/* RIGHT DETAILS SECTION */}
            <div className="details-block">
                <h1 className="prod-title">{product.title}</h1>

                {/* PRICE */}
                <p className="price">₹{product.price}</p>
                <p className="mrp">
                    M.R.P: <strike>₹{product.mrp}</strike>
                </p>

                {/* RATING */}
                <p className="rating">⭐ {product.rating}</p>

                {/* SIZES */}
                <h3 className="sizes-heading">Available Sizes</h3>
                <div className="sizes-container">
                    {product.sizes.map((s) => (
                        <span
                            key={s}
                            className={`size-pill ${selectedSize === s ? "active-size" : ""}`}
                            onClick={() => setSelectedSize(s)}
                        >
                            {s}
                        </span>

                    ))}
                </div>

                {/* OFFER SECTION */}
                <div className="offer-box">
                    <p className="offer-heading">🔥 Special Offer</p>
                    <ul>
                        <li>💰 Extra 10% Off on Online Payment</li>
                        <li>🚚 Free Delivery on orders above ₹499</li>
                        <li>↩️ 7-day Easy Return Policy</li>
                    </ul>
                </div>

                {/* DETAILS */}
                <h3 className="details-heading">Product Details</h3>
                <ul className="details-list">
                    {product.material && <li>Material: {product.material}</li>}
                    {product.sleeve && <li>Sleeve: {product.sleeve}</li>}
                    {product.collar && <li>Collar: {product.collar}</li>}
                    {product.fit && <li>Fit: {product.fit}</li>}
                    <li>Origin: {product.origin}</li>
                </ul>

                {/* BUTTONS */}
                <div className="btn-row">
                    <button
                        className="cart-btn"
                        onClick={() => {
                            if (!selectedSize) {
                                alert("Please select a size!");
                                return;
                            }

                            addToCart({
                                id: product.id,
                                name: product.title,
                                price: product.price,
                                img: product.img,
                                size: selectedSize,
                            });
                        }}

                    >
                        Add to Cart
                    </button>

                    <button className="buy-btn">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ClothDetail;
