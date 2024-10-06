import React from 'react'
import { useSelector } from 'react-redux'

function Navbar() {
    const count = useSelector((state) => state.counter.value)
  return (
    <div style={{width: '100vw', position: 'absolute', top: 0, left: 0, display: 'flex', justifyContent: 'space-between', flexDirection: 'row', backgroundColor: 'white', color: 'black'}}>
      {/* This is Navbar {count} */}
      <li style={{display: 'flex', flexDirection: 'row', listStyle: 'none'}}>
        <ul>Home</ul>
        <ul>About</ul>
        <ul>Contact us</ul>
      </li>
        <button style={{margin: '10px'}}>Cart <span style={{position: 'absolute', top: 5, right: 5, backgroundColor: 'red', color: 'white', borderRadius: '50%', width: 20, height: 20, padding: "2px"}}>{count}</span></button>
    </div>
  )
}

export default Navbar
