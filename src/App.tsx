import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Phone1 from "./assets/phone-1.png";
import Phone2 from "./assets/phone-2.png";
import Phone3 from "./assets/phone-3.png";
import Phone4 from "./assets/phone-4.png";
import { useState } from "react";
const App = () => {
  const [cartItems, setCartItems] = useState(0);
  const [total, setTotal] = useState(0);
  const [clear, setClear] = useState(false);
  const updateTotalCost = (newItemPrice: number, increDecre: number) => {
    setCartItems((cart) => {
      return cart + increDecre;
    });
    setTotal((total) => {
      return total + newItemPrice;
    });
  };
  return (
    <>
      <Navbar cartItems={cartItems} />
      <div className=" w-fit mx-auto text-2xl font-medium mt-28">
        <h2 className=" text-3xl my-10 text-center">Your Bag</h2>

        {!clear && (
          <div className=" flex flex-col gap-5">
            <Product
              key={1}
              img={Phone1}
              title="Samsung X 8"
              price={5000}
              setTotal={updateTotalCost}
            />
            <Product
              key={2}
              img={Phone2}
              title="Google pixel"
              price={7000}
              setTotal={updateTotalCost}
            />
            <Product
              key={3}
              img={Phone3}
              title="Xiomie"
              price={8000}
              setTotal={updateTotalCost}
            />
            <Product
              key={4}
              img={Phone4}
              title="Samsung galaxy"
              price={6000}
              setTotal={updateTotalCost}
            />
          </div>
        )}
        <div className=" flex justify-between my-5">
          <span>Total</span>
          <span>{total}</span>
        </div>
        <div className="text-center">
          <button
            className=" bg-black text-white text-lg font-normal font-mono rounded-lg px-3 py-1"
            onClick={() => {
              setCartItems(0);
              setTotal(0);
              setClear(true);
            }}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
