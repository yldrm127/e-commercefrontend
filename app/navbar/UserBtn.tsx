import {useState} from 'react'
import { Button } from 'react-bootstrap';
import { BsFillPersonFill } from "react-icons/bs";
import Link from "next/link"
function User() {
  return (
    <div className=' me-2'>
      <Link href="/form">
      <Button >
       <BsFillPersonFill/>
       </Button> 
      </Link>
    </div>
  )
}

export default User
