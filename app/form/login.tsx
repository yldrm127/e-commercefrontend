"use client";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Link from "next/link"
interface Sign{
  email:string,
  password:string
}
function login() {
  const [sign,setSign]=useState<Sign>({email:"",password:""})
  const [eyes, setEyes] = useState<string>("password");
  return (
    
      <form className="col-12 col-md-3 shadow p-5">
  
        <div className="mb-3">
          <input
            type="email"
            placeholder="e-mail"
            required
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3 d-flex  align-items-center form-control justify-content-between p-1">
          <input
            type={eyes}
            placeholder="password"
            required
            className="border border-0 form-control "
            id="exampleInputPassword1"
          />
          <span >
            {eyes == "password" ? (
              <button
                className="btn"
                onClick={() => {
                  setEyes("text");
                }}
              >
                <BsEye />
              </button>
            ) : (
              <button
                className="btn"
                onClick={() => {
                  setEyes("password");
                }}
              >
                <BsEyeSlash />
              </button>
            )}
          </span>
        </div>
        <button type="submit" className="btn btn-primary d-block">
          Sign in
        </button>
        <span className="fs-6 fw-lighter">Don't have an account? <Link href="#">Sign up</Link> </span>
      </form>
  
  );
}

export default login;
