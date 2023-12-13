import React from 'react'
import pic from "./images/img2.jpg"

const Chats = () => {
  return (
  <div className='chats'>
    <div className="userChat">
    <img src={pic} alt=""/>
     <div className="userChatInfo">
      <span>Telvin</span>
      <p>Hello</p>
    </div>
    </div>
      <div className="userChat">
    <img src={pic} alt=""/>
     <div className="userChatInfo">
      <span>Telvin</span>
      <p>Hello</p>
      </div>
      </div>
      <div className="userChat">
    <img src={pic} alt=""/>
     <div className="userChatInfo">
      <span>Telvin</span>
      <p>Hello</p>
    </div>
    </div>
      <div className="userChat">
    <img src={pic} alt=""/>
     <div className="userChatInfo">
      <span>Telvin</span>
      <p>Hello</p>
      </div>
    </div>
   </div> 
  )
}

export default Chats