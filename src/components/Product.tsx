import Up from "../assets/up.svg";
import Down from "../assets/down.svg";

type propTypese = {
  id: number;
  img: string;
  price: number;
  name: string;
  total_items: number;
  dispatch: React.DispatchWithoutAction;
};
const Product = ({
  id,
  img,
  price,
  name,
  dispatch,
  total_items,
}: propTypese) => {
  return (
    <div className=" m-auto w-full flex items-center justify-between gap-7 ">
      <img src={img} width={"70px"} height={"70px"} />
      <div className="w-96 text-lg">
        <p>{name}</p>
        <p>{price}</p>
        <span
          className=" text-blue-700 text-sm cursor-pointer"
          onClick={() => {
            dispatch({ type: "remove_item", id: id });
          }}
        >
          remove
        </span>
      </div>
      <div className=" flex flex-col items-center">
        <img src={Up} width={"30px"} height={"30px"} />
        <span>{total_items}</span>
        <img src={Down} width={"30px"} height={"30px"} />
      </div>
    </div>
  );
};

export default Product;
