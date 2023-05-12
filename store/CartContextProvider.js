import CartContext from './cart-context';
import { useReducer } from 'react';

const initialCartValue = {
  cartIsShown: false,
  numberOfItems: 0,
  total: 0,
  items: [
    // {
    //   name: 'Winter Limited Edition Sneakers',
    //   quantity: 3,
    //   price: '250',
    //   imageSrc: 1,
    //   id: 3,
    // },
  ],
};

const cartReducer = (state, action) => {
  if (action.type === 'TOGGLECART') {
    return { ...state, cartIsShown: !state.cartIsShown };
  }

  if (action.type === 'PLUS') {
    return { ...state, numberOfItems: state.numberOfItems + 1 };
  }

  if (action.type === 'MINUS') {
    if (state.numberOfItems === 0) {
      return { ...state };
    }
    return { ...state, numberOfItems: state.numberOfItems - 1 };
  }

  if (action.type === 'ADDTOCART') {
    if (action.item.quantity > 0) {
      const index = state.items.findIndex((item) => item.id === action.item.id);

      let newItems;

      if (index === -1) {
        console.log('new');

        newItems = [...state.items, action.item];

        return { ...state, items: newItems, numberOfItems: 0 };
      } else {
        console.log('existing item');

        // state.items[index].quantity += action.item.quantity / 2;
        newItems = [...state.items];

        newItems[index].quantity += action.item.quantity / 2;

        // newItems = [...state.items];

        return { ...state, items: newItems, numberOfItems: 0 };
      }
    }

    return { ...state };
  }

  if (action.type === 'REMOVE') {
    const index = state.items.findIndex((item) => item.id === action.id);
    console.log('remove');

    const newItems = state.items.filter((item) => item.id !== action.id);

    // delete updatedItems[index];

    return { ...state, items: newItems };
  }
  return initialCartValue;
};

const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartValue
  );

  console.log(cartState);

  const toggleCartHandler = () => {
    dispatchCartAction({ type: 'TOGGLECART' });
  };

  const plusHandler = () => {
    dispatchCartAction({ type: 'PLUS' });
  };

  const minusHandler = () => {
    dispatchCartAction({ type: 'MINUS' });
  };

  const addToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADDTOCART', item: item });
  };

  const removeHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const total = cartState.items.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);

  const cartData = {
    cartState,
    toggleCartHandler,
    plusHandler,
    minusHandler,
    addToCartHandler,
    removeHandler,
    total,
  };

  return (
    <CartContext.Provider value={cartData}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
