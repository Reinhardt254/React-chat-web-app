import React from 'react'
import Ray from "./images/ray.JPG"

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src={Ray} alt=""/>
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src={Ray} alt=""/>
      </div>
    </div>
  )
}

export default Message






















