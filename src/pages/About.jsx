import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>About ShopEase</h1>
        <p>Your trusted online store for quality, comfort, and convenience.</p>
      </section>

    <section className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            ShopEase was founded with one simple goal — to make online shopping
            seamless and enjoyable. From trendy fashion to daily essentials, we
            bring you products that make life easier and more stylish.
          </p>
          <p>
            We believe in quality, affordability, and trust. That’s why every
            product you find on our store goes through careful curation and
            quality checks to ensure you get only the best.
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
            alt="Our Store"
          />
        </div>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>💚 Customer First</h3>
            <p>We prioritize your satisfaction in every product and service.</p>
          </div>
          <div className="value-card">
            <h3>💸 Fair Prices</h3>
            <p>High quality doesn’t have to be expensive — we prove that!</p>
          </div>
          <div className="value-card">
            <h3>🌱 Sustainability</h3>
            <p>We’re committed to reducing waste and using eco-friendly packaging.</p>
          </div>
        </div>
         <div className="values-grid" style={{marginTop:'25px'}}>
          <div className="value-card">
            <h3>🏍 Fast Delivery</h3>
            <p>We ensure quick and reliable delivery so your favorite products reach you on time, every time.</p>
          </div>
          <div className="value-card">
            <h3>💸 Secure Payments</h3>
            <p>Your transactions are protected with trusted and encrypted payment gateways for a safe shopping experience.</p>
          </div>
          <div className="value-card">
            <h3>🎁 Easy Returns</h3>
            <p>Not satisfied with a product? Enjoy hassle-free returns and quick refunds with our simple return policy.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
