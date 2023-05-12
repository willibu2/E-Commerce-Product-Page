import classes from './Cart.module.css';
import CartContext from '@/store/cart-context';
import { useContext } from 'react';
import SingleItem from './SingleItem';

const Cart = () => {
  const cartCtx = useContext(CartContext);

  console.log(cartCtx.cartState.items);

  const item = cartCtx.cartState.items[0];

  const cartIsEmpty = cartCtx.cartState.items.length === 0;

  return (
    <div className={classes.cart}>
      <p className={classes.p}>Cart</p>
      <div className={classes.hl} />
      {!cartIsEmpty && (
        <div className={classes['items-container']}>
          {cartCtx.cartState.items.map((item) => (
            <SingleItem
              id={item.id}
              price={item.price}
              quantity={item.quantity}
              name={item.name}
              key={item.id}
              onClick={cartCtx.removeHandler.bind(null, item.id)}
            />
          ))}

          <button className={classes.btn}>Checkout</button>
        </div>
      )}

      {cartIsEmpty && (
        <div>
          <div className={classes['empty-container']}>
            <p className={classes['empty-text']}>Your cart is empty.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
