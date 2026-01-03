import React from 'react'
import { Link } from 'react-router-dom'; 
import "./Clothes.css";

import { clothData } from '../data/ClothData';

const Clothes = () => {



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