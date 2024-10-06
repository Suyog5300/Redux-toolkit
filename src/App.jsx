import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";

function App() {
  const products = [
    {
      id: 1,
      name: "Classic T-Shirt",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "Denim Jeans",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "Sneakers",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      name: "Leather Jacket",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      name: "Sunglasses",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 6,
      name: "Watch",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <div className="app">
      <Navbar />
      <div className="hero">
        <h1>Welcome to Our Store</h1>
        <p>Discover the latest trends in fashion</p>
      </div>
      <div className="product-grid">
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
  );
}

export default App;