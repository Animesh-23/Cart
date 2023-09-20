type stateTypes = {
  items: {
    id: number;
    name: string;
    price: number;
    img: string;
    total_items: number;
  }[];
  total_cart_items: number;
  total_cost: number;
};

const reducer = (state: stateTypes, action: { type: string; id: number }) => {
  switch (action.type) {
    case "clear_cart": {
      return [];
    }
    case "remove_item": {
      const newCart = state.filter((item) => {
        console.log(item);
        return item.id !== action.id;
      });
      return newCart;
    }
    case "total_cost": {
      let { total_cart_items, total_cost } = state.items.reduce(
        (total, item) => {
          return {total.price * total.total_items + item.total_items,total.price * total.total_items + item.price * item.total_items};
        },
        {total_cart_items:0,total_cost:0}
      );
      return {
        ...state.items,
        total_cart_items,
        total_cost
      };
    }
  }
};

export default reducer;
