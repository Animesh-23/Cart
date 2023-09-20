import { cartItems } from "../assets/data";
import { useReducer } from "react";
import Product from "./Product";
import reducer from "../store/reducer";

type productType = {
  id: number;
  name: string;
  price: number;
  img: string;
  total_items: number;
};
const initialState = {
  items: cartItems,
  total_cart_items: 0,
  total_cost: 0,
};
const CartContainer = () => {
  const [cart, dispatch] = useReducer(reducer, initialState);
  return (
    <div className=" w-fit mx-auto text-2xl font-medium mt-28">
      <h2 className=" text-3xl my-10 text-center">Your Bag</h2>
      {cart &&
        cart.items.map((item: productType) => {
          return (
            <Product
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              total_items={item.total_items}
              dispatch={dispatch}
            />
          );
        })}
      <div className=" flex justify-between my-5">
        <span>Total</span>
        <span>{cart.total_cost}</span>
      </div>
      <div className="text-center">
        <button className=" bg-black text-white text-lg font-normal font-mono rounded-lg px-3 py-1">
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartContainer;
