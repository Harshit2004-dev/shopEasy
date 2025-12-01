import React from 'react'
import { Link } from 'react-router-dom'; 
import "./Clothes.css";

import { clothData } from '../data/ClothData';

const Clothes = () => {

//   const items = [
//   {
//     id: 1,
//     title: "Hoodie",
//     img: hoodie,
//     images: ["/assets/hoodie1.jpg", "/assets/hoodie2.jpg"],
//     price: 799,
//     mrp: 1699,
//     rating: 4.5,
//     sizes: ["M", "L", "XL"],
//     material: "Fleece Cotton",
//     sleeve: "Full Sleeve",
//     collar: "Hooded",
//     origin: "India",
//   },

//   {
//     id: 2,
//     title: "Jeans",
//     img: jeans,
//     images: ["/assets/jeans1.jpg", "/assets/jeans2.jpg"],
//     price: 999,
//     mrp: 1999,
//     rating: 4.4,
//     sizes: ["30", "32", "34", "36"],
//     material: "Denim",
//     fit: "Slim Fit",
//     origin: "India",
//   },

//   {
//     id: 3,
//     title: "Jogger",
//     img: jogger,
//     images: ["/assets/jogger1.jpg", "/assets/jogger2.jpg"], // better images
//     price: 699,
//     mrp: 1299,
//     rating: 4.3,
//     sizes: ["M", "L", "XL"],
//     material: "Cotton Blend",
//     fit: "Regular Fit",
//     origin: "India",
//   },

//   {
//     id: 4,
//     title: "Shirt",
//     img: shirt,
//     images: ["/assets/shirt1.jpg", "/assets/shirt2.jpg"],
//     price: 599,
//     mrp: 1199,
//     rating: 4.2,
//     sizes: ["S", "M", "L", "XL"],
//     material: "Premium Cotton",
//     sleeve: "Full Sleeve",
//     collar: "Spread Collar",
//     origin: "India",
//   },

//   {
//     id: 5,
//     title: "T_Shirt",
//     img: t_shirt,
//     images: ["/assets/tshirt1.jpg", "/assets/tshirt2.jpg"],
//     price: 399,
//     mrp: 899,
//     rating: 4.1,
//     sizes: ["S", "M", "L", "XL"],
//     material: "Pure Cotton",
//     sleeve: "Half Sleeve",
//     collar: "Round Neck",
//     origin: "India",
//   },

//   {
//     id: 6,
//     title: "Shirt",
//     img: shirt1,
//     images: ["/assets/shirt1.jpg", "/assets/shirt2.jpg"],
//     price: 649,
//     mrp: 1299,
//     rating: 4.3,
//     sizes: ["S", "M", "L", "XL"],
//     material: "Cotton Linen",
//     sleeve: "Full Sleeve",
//     collar: "Mandarin Collar",
//     origin: "India",
//   },

//   {
//     id: 7,
//     title: "Trendy Clothing Set",
//     img: shirt2,
//     images: ["/assets/set1.jpg", "/assets/set2.jpg"],
//     price: 999,
//     mrp: 1999,
//     rating: 4.4,
//     sizes: ["S", "M", "L", "XL"],
//     material: "Poly-Cotton",
//     sleeve: "Half Sleeve",
//     collar: "Regular Collar",
//     origin: "India",
//   },

//   {
//     id: 8,
//     title: "Shorts",
//     img: shorts,
//     images: ["/assets/shorts1.jpg", "/assets/shorts2.jpg"],
//     price: 349,
//     mrp: 799,
//     rating: 4.2,
//     sizes: ["S", "M", "L"],
//     material: "Terry Cotton",
//     fit: "Relaxed Fit",
//     origin: "India",
//   },

//   {
//     id: 9,
//     title: "Sleevless",
//     img: sleevless,
//     images: ["/assets/sleeveless1.jpg", "/assets/sleeveless2.jpg"],
//     price: 299,
//     mrp: 699,
//     rating: 4.1,
//     sizes: ["S", "M", "L", "XL"],
//     material: "Cotton",
//     sleeve: "Sleeveless",
//     collar: "Round Neck",
//     origin: "India",
//   },
// ];


    return (
        <>
            <div className="cloth-section">
                <div className="cloth-header">
                    <h2>Up to 60% off || Clothing Deals 🥼</h2>
                    {/* <span style={{ marginLeft: '20px' }}><a href="#">See all</a></span>  */}
                </div>

                <div className="cloth-items">
                    {clothData.map((item) => (
                        <div className="cloth-card" key={item.id}>
                            <Link to={`/shopEasy/clothing/${item.id}`}>
                            <img src={item.img} alt={item.title} />
                            </Link>
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default  Clothes 