import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  multiplyByAmount,
} from "./redux/counter/counterSlice";
import Cards from "./components/Cards";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const products = [
    {
      id: 1,
      name: "T-Shirt",
      price: 1000,
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "Jeans",
      price: 2000,
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      name: "Shoes",
      price: 3000,
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      name: "Trousers",
      price: 4000,
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "30px",}}>
        {/* <button style={{marginRight: '10px'}} onClick={() => dispatch(decrement())}>-</button>
       Currently count is: {count}
       <button style={{marginLeft: '10px'}} onClick={() => dispatch(increment())}>+</button>
       <button style={{marginLeft: '10px'}} onClick={() => dispatch(multiplyByAmount(5))}>*</button> */}

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 3fr)", margin: "10px", gap: "10px"}}>
          {products.map((item) => (
            <Cards
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
