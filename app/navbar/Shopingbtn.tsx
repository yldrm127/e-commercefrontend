import React from "react";
import { Button } from "react-bootstrap";
import { BsBasket3 } from "react-icons/bs";
function Shoping() {
  return (
    <div className="me-3 position-relative">
      <span className="position-absolute top-0 start-100 translate-middle  bg-danger border border-light rounded-circle">
    <span className=" p-2 text-light">1</span>
  </span>
      <Button>
        <BsBasket3 />
      </Button>
    </div>
  );
}

export default Shoping;
