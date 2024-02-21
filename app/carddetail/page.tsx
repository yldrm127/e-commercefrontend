import Image from "next/image";
import Cardstart from "./Cardstart";
import CardButton from "./CardButton";
import { Button } from "react-bootstrap";
import { useBasket } from "../BasketProvider";
function Carddetail() {
  const {setBaskets}=useBasket()
  return (
    <div className="row m-5">
      <div className="col-12 col-xl-6 ">
        <Image
          className={`w-100 h-auto p-2 rounded-4`}
          src="/shop.webp"
          alt="image"
          height={200}
          width={400}
        />
      </div>
      <div className=" col-12 col-xl-6 d-flex align-items-start flex-column">
       
          <h5 className="product name">Card title</h5>
          <h6>
            <Cardstart />
          </h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>

          <Button  className="mt-auto">$ 55</Button>
        </div>
      
    </div>
  );
}

export default Carddetail;
