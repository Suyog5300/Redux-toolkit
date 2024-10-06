import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counter/counterSlice";

function Cards({ name, price, image }) {
  const [isAddedtoCart, setIsAddedtoCart] = useState(false);
  const dispatch = useDispatch();

  const addToCart = () => {
    if (!isAddedtoCart) {
      dispatch(increment());
    } else {
      dispatch(decrement());
    }
    setIsAddedtoCart(!isAddedtoCart);
  }

  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
        <p className="card-price">${price.toLocaleString()}</p>
        <button 
          className={`card-button ${isAddedtoCart ? 'remove' : 'add'}`} 
          onClick={addToCart}
        >
          {isAddedtoCart ? 'Remove from cart' : 'Add to cart'}
        </button>
      </div>
    </div>
  )
}

export default Cards;