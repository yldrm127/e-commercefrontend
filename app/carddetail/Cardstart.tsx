"use client"
import {useState} from "react";
import { BsStar } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
function Cardstart() {
    const[ star,setStar]=useState<number>(0)
    const clickstar=(params:number)=>{
        setStar(params)
    }
  return (
    <div>
      <span  onClick={()=>clickstar(1)}>{ star>=1? <BsStarFill/>:<BsStar/>}</span>
      <span onClick={()=>clickstar(2)}>{ star>=2? <BsStarFill/>:<BsStar/>}</span>
      <span onClick={()=>clickstar(3)}>{ star>=3? <BsStarFill/>:<BsStar/>}</span>
      <span onClick={()=>clickstar(4)}>{ star>=4? <BsStarFill/>:<BsStar/>}</span>
      <span onClick={()=>clickstar(5)}>{ star>=5? <BsStarFill/>:<BsStar/>}</span>
    </div>
  );
}

export default Cardstart;
