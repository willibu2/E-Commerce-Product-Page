import classes from './MainSection.module.css';
import ImagesSection from './ImagesSection';
import CartIcon from './UI/Icons/CartIcon';
import { useContext } from 'react';
import CartContext from '@/store/cart-context';

const MainSection = () => {
  const cartCtx = useContext(CartContext);

  return (
    <section className={classes.section}>
      <div className={classes['mobile-backdrop']} />
      <ImagesSection />
      <div className={classes['sneaker-info-container']}>
        <p className={classes['small-title']}>SNEAKER COMPANY</p>
        <h1 className={classes.title}>Fall Limited Edition Sneakers</h1>
        <p className={classes.description}>
          These low profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they`ll withstand everything
          the weather can offer.
        </p>
        <div className={classes['price-container']}>
          <p className={classes.price}>$125.00</p>
          <p className={classes.percentage}>50%</p>
        </div>
        <p className={classes['old-price']}>
          <s className={classes['old-price']}>$250</s>
        </p>
        <div className={classes['buttons-container']}>
          <div className={classes['left-button-container']}>
            <button
              className={classes['plus-minus-btn']}
              onClick={cartCtx.minusHandler}
            >
              -
            </button>
            <p className={classes['items-number']}>
              {cartCtx.cartState.numberOfItems}
            </p>
            <button
              className={classes['plus-minus-btn']}
              onClick={cartCtx.plusHandler}
            >
              +
            </button>
          </div>
          <button
            className={classes['cart-btn']}
            onClick={cartCtx.addToCartHandler.bind(null, {
              name: 'Fall Limited Edition Sneakers',
              quantity: cartCtx.cartState.numberOfItems,
              price: '125',
              imageSrc: 1,
              id: 1,
            })}
          >
            <CartIcon color="white" />
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
