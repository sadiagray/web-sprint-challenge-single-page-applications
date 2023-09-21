import React from "react";
import { Link } from "react-router-dom";
import Orders from "./Orders";

function Confirmation(props) {
    const { orders, clear } = props

    return (
        <div className="confirm-wrapper">
            <header>
                <h1>BloomTech Pizza</h1>
                <div className="nav-links">
                    <Link to="/"><button>Home</button></Link>
                </div>
            </header>
            <div className="order-success">
                <h2>Success! Your order is on the way!</h2>
            </div>
            <div className="order-details">
                {
                    orders.map(order =>{
                        return ( 
                            <Orders key={orders.id} details={order}/>
                        )
                    })
                }
            </div>
            <div className="reset-button">
                <button onClick={clear}>Clear Orders</button>
            </div>
        </div>
    )
};
export default Confirmation;