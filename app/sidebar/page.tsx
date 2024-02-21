import React from "react";
import styles from "../styles/components.module.css";
import Link from "next/link";
function index() {
  return (
    <div className="col-12 col-md-3 fs-4 ">
      <ul className={`list-unstyled ${styles.sidebar}`}>
        <li className={`${styles.li}`}>
          <Link
            className=" link-offset-2 link-underline link-underline-opacity-0"
            href="/cards"
          >
            #ayakkabı
          </Link>
        </li>
        <li className={`${styles.li}`}>
          <Link
            className="link-offset-2 link-underline link-underline-opacity-0"
            href=""
          >
            #çanta
          </Link>
        </li>
        <li className={`${styles.li}`}>
          <Link
            className="link-offset-2 link-underline link-underline-opacity-0"
            href=""
          >
            #ceket
          </Link>
        </li>
        <li className={`${styles.li}`}>
          <Link
            className="link-offset-2 link-underline link-underline-opacity-0"
            href=""
          >
            #gömlek
          </Link>
        </li>
        <li className={`${styles.li}`}>
          <Link
            className="link-offset-2 link-underline link-underline-opacity-0"
            href=""
          >
            #t-short
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default index;
