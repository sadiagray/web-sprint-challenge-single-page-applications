import React from "react";

const constants = ["pepperoni","sausage","extraCheese","mushroom","bacon"]
function Orders({details}) {
    return(
        <div key={details.id} className="order-container">
            <h2>Order Number: {details.id}</h2>
            <div className="specifics">
                <p>Name: {details.customer}</p>
                <p>Size: {details.size}</p>
                <p>Sauce: {details.sauce}</p>
                    <div>
                        <p>Toppings:</p>
                        <ul>
                        {constants.map((topping,idx) => {
                            if(details[topping] === true){
                                return(
                                    <li>{topping}</li>
                                )
                            }
                        })}
                    </ul>  
                    </div>
            </div>
            <p>{details.gluten ? "Gluten Free Crust" : "Regular Crust"}</p>
            <p>Special instructions</p>
            <p>{details.special === "" ? "none" : details.special}</p>
        </div>
        
    )
}

export default Orders;