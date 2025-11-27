import React from 'react'
import "./Clothes.css";
import hoodie from '../assets/hoodie.webp';
import jeans from '../assets/jeans.webp';
import jogger from '../assets/jogger.webp';
import shirt from '../assets/shirt.webp';
import t_shirt from '../assets/t_shirt.webp';
import shirt1 from "../assets/shirt1.jpg";
import shirt2 from "../assets/shirt2.jpg";
import shorts from '../assets/shorts.jpg';
import sleevless from "../assets/sleevless.jpg";

const Clothes = () => {
    const items = [
        { id: 1, img: hoodie, name: "Hoodie" },
        { id: 2, img: jeans, name: "Jeans" },
        { id: 3, img: jogger, name: "Jogger" },
        { id: 4, img: shirt, name: "Shirt" },
        { id: 5, img: t_shirt, name: "T_shirt" },
        { id: 6, img: shirt1, name: "shirt" },
        { id: 6, img: shirt2, name: "Trendy Clothing Set" },
        { id: 7, img: shorts, name: "shorts" },
        { id: 8, img: sleevless, name: "sleevless" }
    ];

    return (
        <div className="cloth-section">
            <div className="cloth-header">
                <h2>Up to 60% off || Clothing Deals 🥼🥼</h2>
                 {/* <span style={{ marginLeft: '20px' }}><a href="#">See all</a></span> */}
            </div>

            <div className="cloth-items">
                {items.map((item) => (
                    <div className="cloth-card" key={item.id}>
                        <img src={item.img} alt={item.name} />
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Clothes