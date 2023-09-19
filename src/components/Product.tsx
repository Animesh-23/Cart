import Up from "../assets/up.svg";
import Down from "../assets/down.svg";
import { useEffect, useState } from "react";

type propsType = {
  img: string;
  title: string;
  price: number;
  setTotal: (newItemPrice: number, increDecre: number) => void;
};
const Product = ({ img, title, price, setTotal }: propsType) => {
  const [items, setItems] = useState(1);
  let flag = true;
  useEffect(() => {
    if (flag) {
      setTotal(price, items);
      flag = false;
    }
  }, []);
  return (
    items >= 1 && (
      <div className=" m-auto w-full flex items-center justify-between gap-7 ">
        <img src={img} width={"70px"} height={"70px"} />
        <div className="w-96 text-lg">
          <p>{title}</p>
          <p>{price}</p>
          <span
            className=" text-blue-700 text-sm cursor-pointer"
            onClick={() => {
              setItems(0);
              setTotal(-1 * price * items, -1 * items);
            }}
          >
            remove
          </span>
        </div>
        <div className=" flex flex-col items-center">
          <img
            src={Up}
            width={"30px"}
            height={"30px"}
            onClick={() => {
              setItems((items) => {
                return items + 1;
              });
              setTotal(price, 1);
            }}
          />
          <span>{items}</span>
          <img
            src={Down}
            width={"30px"}
            height={"30px"}
            onClick={() => {
              setItems((items) => {
                return items - 1;
              });
              setTotal(-1 * price, -1);
            }}
          />
        </div>
      </div>
    )
  );
};

export default Product;
