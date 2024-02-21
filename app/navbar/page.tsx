import React from 'react'
import Search from "./Search"
import Shoping from './Shopingbtn'
import User from "./UserBtn"
function index() {
  return (
    <div className=' mt-5 mb-5 d-flex justify-content-between 'content='width:device-width' >
      <Search/>
      <div className='d-flex '>
      <Shoping/>
      <User/>
      </div>
    
    </div>
  )
}

export default index
