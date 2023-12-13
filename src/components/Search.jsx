import React from 'react'
import pic from "./images/img2.jpg"

const search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='find a user' />
      </div>
      <div className="userChat">
        <img src={pic} alt=""/>
        <div className="userChatInfo">
          <span>Telvin</span>
        </div>

      </div>
    </div>
  )
}

export default search