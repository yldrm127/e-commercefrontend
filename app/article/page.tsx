import React from "react";
import Image from "next/image";
import styles from "../styles/components.module.css";
import Link from "next/link";
function index() {
  return (
    <div className="col-12 col-md-9">
      <div className="row">
        <div className=" col-12  col-xl-6 m-0 overflow-hidden ">
          <Link href="/carddetail">
            <Image
              className={`w-100 h-auto p-2 rounded-4  overflow-hidden   ${styles.scale}`}
              src="/shop.webp"
              alt="image"
              height={200}
              width={400}
            />
          </Link>
          <Link href="">
            <Image
              className={`w-100 h-auto p-2 rounded-4 ${styles.scale}`}
              src="/shop.webp"
              alt="image"
              height={200}
              width={400}
            />
          </Link>
        </div>
        <div className="row col-12  col-xl-6 m-0 overflow-hidden">
          <Link href="">
            <Image
              className={`col-6 w-100 h-100 p-2 rounded-4 ${styles.scale}`}
              src="/shop.webp"
              alt="image"
              height={200}
              width={400}
            />
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="row col-12 col-xl-6  m-0 overflow-hidden">
          <Link href="">
          <Image
            className={`col-6 w-100 h-100 p-2 rounded-4 ${styles.scale}`}
            src="/shop.webp"
            alt="image"
            height={200}
            width={400}
          />
          </Link>
        
        </div>
        <div className="col-12 col-xl-6  m-0 overflow-hidden">
          <Link href="">
          <Image
            className={`w-100 h-auto p-2 rounded-4 ${styles.scale}`}
            src="/shop.webp"
            alt="image"
            height={200}
            width={400}
          />
          </Link>
          <Link href="">
          
          <Image
            className={`w-100 h-auto p-2 rounded-4 ${styles.scale}`}
            src="/shop.webp"
            alt="image"
            height={200}
            width={400}
          />
          </Link>
         
        </div>
      </div>
    </div>
  );
}

export default index;
