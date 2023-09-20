import Trolly from "../assets/cart.png";
const Navbar = () => {
  return (
    <div className=" bg-blue-700 p-5 text-white text-xl">
      <div className=" mx-72 text-3xl flex justify-between">
        useReducer
        <div className=" flex">
          <img src={Trolly} width={"50px"} height={"50px"} />
          <span className=" rounded-full bg-white text-black w-7 h-7 text-center text-lg relative bottom-3"></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
