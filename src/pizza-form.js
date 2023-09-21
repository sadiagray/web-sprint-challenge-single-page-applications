import React from "react";
import { Link , useNavigate } from "react-router-dom";

export default function Pizza(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
        reset
    } = props

    const navigate = useNavigate()
    const routeToConfirm = () => {
        navigate('/confirm')
    }

    const onSubmit = evt => {
        evt.preventDefault()
            submit()
            reset()
            routeToConfirm()
    }

    const onChange = evt => {
        const {
            checked,
            value,
            name,
            type
        } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value
        change(name,valueToUse)
    }
    
        

    return (
        <div className="Pizza">
            <header>
                <h1>BloomTech Pizza</h1>
                <div className="navLinks">
                    <Link to="/"><button onClick={reset}>Home</button></Link>
                </div>
            </header>
                <form className="pizza-form" id="pizza-form" onSubmit={onSubmit}>
                    <div className="pizza-builder">
                        <h3>Build Your Pie!</h3>
                        <div className="customer name">
                            <label><h3>Enter a name for your order:</h3>
                                <input
                                    id="name-input"
                                    type="text"
                                    name="customer"
                                    placeholder="enter a name"
                                    onChange={onChange}
                                    value={values.customer}
                                />
                            </label>
                        </div>
                        <label> <h3>Select a size:</h3>
                             <select 
                                id="size-dropdown"
                                name="size" 
                                onChange={onChange}
                                className="size-selection" 
                                value={values.size}>
                                <option value="">Select a size</option>
                                <option value="large">Large</option>
                                <option value="medium">Medium</option>
                                <option value= "small">Small</option>
                                </select>
                        </label>
                        <div className="sauce-wrapper">
                            <h3>Choose a sauce:</h3>
                                
                                    <input
                                    type="radio"
                                    name="sauce"
                                    value="Original Marinara"
                                    onChange={onChange}
                                    checked={values.sauce === "Original Marinara"}
                                    />
                                <label> Original Marinara </label>
                                
                                    <input
                                    type="radio"
                                    name="sauce"
                                    value="BBQ"
                                    onChange={onChange}
                                    checked={values.sauce === "BBQ"}
                                    />
                                <label> BBQ </label>
                                
                                    <input
                                    type="radio"
                                    name="sauce"
                                    value="Garlic Parm"
                                    onChange={onChange}
                                    checked={values.sauce === "Garlic Parm"}
                                    />
                                <label> Garlic Parm </label>
                                
                                    <input
                                    type="radio"
                                    name="sauce"
                                    value="Buffalo"
                                    onChange={onChange}
                                    checked={values.sauce === "Buffalo"}
                                    />
                               <label> Buffalo </label>
                        </div>
                        <div className="toppings">
                            <h3>Select your toppings:</h3>
                            
                                <input
                                    type="checkbox"
                                    name="pepperoni"
                                    checked={values.pepperoni}
                                    onChange={onChange}
                                />
                            <label>Pepperoni </label>
                            
                                <input
                                    type="checkbox"
                                    name="sausage"
                                    checked={values.sausage}
                                    onChange={onChange}
                                />
                            <label>Sausage </label>
                            
                                <input
                                    type="checkbox"
                                    name="bacon"
                                    checked={values.bacon}
                                    onChange={onChange}
                                />
                            <label>Bacon </label>
                            
                                <input
                                    type="checkbox"
                                    name="mushrooms"
                                    checked={values.mushrooms}
                                    onChange={onChange}
                                />
                            <label>Mushrooms </label>
                            
                                <input
                                    type="checkbox"
                                    name="extraCheese"
                                    checked={values.extraCheese}
                                    onChange={onChange}
                                />
                            <label>Extra Cheese </label>
                        </div>
                        <div className="substitutes">
                            <h3>Make a substitute:</h3>
                            
                                <input
                                    name="gluten"
                                    type='checkbox'
                                    checked={values.gluten}
                                    onChange={onChange}
                                />
                            <label>Gluten Free Crust (+ $1.00)</label>
                        </div>
                        <div className="special-instructions">
                            <h3>Special Instructions - Anything else you'd like to add?</h3>
                            <input
                                id="special-text"
                                name="special"
                                type="text"
                                placeholder="let us know!"
                                onChange={onChange}
                                value={values.special}
                            />
                        </div>
                        <div>{errors.size}</div>
                        <div>{errors.sauce}</div>
                        <div>{errors.customer}</div>
                        <button className="submit" id="order-button" disabled={disabled}>submit</button>
                    </div>
                </form>
        </div>
    )
}