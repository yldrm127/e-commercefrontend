import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface Basket {
  productname: string;
  productımg:string,
  price:number,
  piece:number
}
interface BasketsContextInterface {
  baskets: Basket[];
  setBaskets: Dispatch<SetStateAction<Basket[]>>;
}
export const BasketContext = createContext({} as BasketsContextInterface);
const BasketProvider = ({ children }: PropsWithChildren) => {
  const [baskets, setBaskets] = useState<Basket[]>([]);
  return (
    <BasketContext.Provider value={{ baskets, setBaskets }}>
      {children}
    </BasketContext.Provider>
  );
};
export const useBasket =()=> useContext(BasketContext);

export default BasketProvider;
