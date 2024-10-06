import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import {
    increment,
    decrement,
    multiplyByAmount,
  } from "../redux/counter/counterSlice";
  
  

  function Cards() {
    const [isAddedtoCart, setIsAddedtoCart] = useState(false);
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const addToCart = () =>{
        setIsAddedtoCart(true);

        if(!isAddedtoCart){
            dispatch(increment());
            setIsAddedtoCart(true);
        }
        else if(isAddedtoCart){
            dispatch(decrement());
            setIsAddedtoCart(false);
        }
    }
  return (
    <div >
      <div style={{border: '1px solid black', padding: '10px', height: '350px', width: '300px'}}>
        <h3>Cards</h3>
        <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="t-shirt" style={{width: '100px', height: '100px'}}/>
        <h4>Name: T-Shirt</h4>
        <h4>Price: 1000</h4>
        <button style={{margin: '10px'}} onClick={addToCart}>{isAddedtoCart ? 'Remove from cart' : 'Add to cart'}</button>
      </div>
    </div>
  )
}

export default Cards
