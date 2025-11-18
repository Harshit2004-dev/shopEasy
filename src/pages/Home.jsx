import React, { useContext, useState } from "react";
import "./Home.css";
import { CartContext } from "../context/CartContext";
import iphone_17_1 from "../assets/iphone_17_1.jpeg";
import iphone_17_2 from "../assets/iphone_17_2.jpeg";
import iphone_17_3 from "../assets/iphone_17_3.jpeg";
import samsung from "../assets/samsung.jpg";
import samsung1 from "../assets/samsung1.jpeg";
import samsung2 from "../assets/samsung2.jpeg";
import iphone16_1 from "../assets/iphone16_1.jpeg";
import iphone16_2 from "../assets/iphone16_2.jpeg";
import iphone16_3 from "../assets/iphone16_3.jpeg";
import googlePixel from "../assets/googlePixel.jpeg";
import googlePixel_1 from "../assets/googlePixel_1.jpeg";
import googlePixel_2 from "../assets/googlePixel_2.jpeg";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const { addToCart } = useContext(CartContext);

  const navigate = useNavigate()
  const products = [
    { id: 1, name: "iPhone 17 Pro 1 TB", price: 174900, img: [iphone_17_1, iphone_17_2, iphone_17_3], rating: '⭐ 4.5 (77 reviews)', product_offer: 'M.R.P :₹2,00,000', product_offer2: "Save extra with No Cost EMI", product_delivery: "Free delivery:within 4-5 days!", color_1: '#F77E2D', color_2: '#F5F5F5', color_3: '#32374A' },
    { id: 2, name: "Samsung Galaxy Z Fold6", price: 109999, img: [samsung, samsung1, samsung2], rating: '⭐ 4.7 (57 reviews)', product_offer: 'M.R.P :₹1,64,999', product_offer2: "Save extra with No Cost EMI", product_delivery: "Free delivery:within 4-5 days!", color_1: '#D7D9DB', color_2: '#0E2A47', color_3: '#F2B6C6' },
    { id: 3, name: "iPhone 16 128 GB", price: 66900, img: [iphone16_1, iphone16_2, iphone16_3], rating: '⭐ 4.2 (76 reviews)', product_offer: 'M.R.P :₹79,900', product_offer2: "Save extra with No Cost EMI", product_delivery: "Free delivery:within 4-5 days!", color_1: '#F4B8C3', color_2: "blue", color_3: '#AEE1CD' },
    { id: 4, name: "Google Pixel 10 5G", price: 69580, img: [googlePixel, googlePixel_1, googlePixel_2], rating: '⭐ 4.5 (30 reviews)', product_offer: 'M.R.P :₹79,900', product_offer2: "Save extra with No Cost EMI", product_delivery: "Free delivery:within 4-5 days!", color_1: '#D7D9DB', color_2: "blue", color_3: "black" },
  ];

  const [currentImages, setCurrentImages] = useState(
    products.map((p) => p.img[0])
  );

  const handleImageChange = (index, newImage) => {
    const updated = [...currentImages];
    updated[index] = newImage;
    setCurrentImages(updated);
  };

  // handal handal_product_details
  //change
  const handleProductDetails = (product) => {
    navigate(`/product_details/${product.id}`, { state: { product } });
  };


  return (
    <div style={{ padding: "20px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {products.map((p, index) => (
        <div key={p.id} className="product-card" style={{ margin: "20px" }}>

          {/* product image */}
          <div className="product-image" onClick={() => handleProductDetails(p)}>
            <img src={currentImages[index]} alt={p.name} />
          </div>

          {/* product info. */}
          <div className="product-info" >
            {/* change */}
            <h3 onClick={() => handleProductDetails(p)}>{p.name}</h3>
            <p className="product-rating">{p.rating}</p>
            <p>₹{p.price.toLocaleString()}</p>
            <div className="product-color">
              <div style={{ backgroundColor: p.color_1 }} onClick={() => handleImageChange(index, p.img[0])}></div>
              <div style={{ backgroundColor: p.color_2 }} onClick={() => handleImageChange(index, p.img[1])}></div>
              <div style={{ backgroundColor: p.color_3 }} onClick={() => handleImageChange(index, p.img[2])}></div>
            </div>
            <p className="product-offer" style={{ textDecoration: "line-through" }}>{p.product_offer}</p>
            <p className="product-offer2">{p.product_offer2}</p>
            <p className="product-delivery">{p.product_delivery}</p>


            {/* <button className="add-to-cart-btn" onClick={() => addToCart(p)}>Add to Cart</button> */}

            <button
              className="add-to-cart-btn"
              onClick={() => addToCart({ ...p, img: currentImages[index] })}>Add to Cart</button>

          </div>
        </div>
      ))}

    </div>
  );
};

export default Home;
