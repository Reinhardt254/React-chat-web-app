import React from 'react'
import pic from "./images/img2.jpg"

const Navbar = () => {
  return (
    <div className='navbar'>
    <span className="logo">Icon chat</span>
    <div className="user">
      <img src= {pic} alt="" />
      <span>Reinhardt</span>
      <button>logout</button>
    </div>
    </div>
  )
}

export default Navbar