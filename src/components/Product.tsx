import Up from "../assets/up.svg";
import Down from "../assets/down.svg";
import { useState } from "react";

type propsType = {
  img: string;
  title: string;
  price: number;
};
const Product = ({ img, title, price }: propsType) => {
  const [items, setItems] = useState(1);
  return (
    <div className=" m-auto w-full flex items-center justify-between gap-4 ">
      <img src={img} width={"70px"} height={"70px"} />
      <div className="w-96">
        <p>{title}</p>
        <p>{price}</p>
        <span className=" text-blue-700 text-sm">remove</span>
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
          }}
        />
        <span>{items}</span>
        <img src={Down} width={"30px"} height={"30px"} />
      </div>
    </div>
  );
};

export default Product;
