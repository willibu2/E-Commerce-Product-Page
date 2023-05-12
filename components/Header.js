import classes from './Header.module.css';
import Link from 'next/link';
import CartIcon from './UI/Icons/CartIcon';
import MenuIcon from './UI/Icons/MenuIcon';
import Image from 'next/image';
import Cart from './CART/Cart';
import { useState, useContext, useEffect } from 'react';
import NavBar from './NavBar';
import CartContext from '@/store/cart-context';

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const [navIsShown, setNavIsShown] = useState(false);

  const navToggleHandler = () => {
    setNavIsShown((prevState) => !prevState);
  };

  useEffect(() => {
    if (navIsShown) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [navIsShown]);

  return (
    <>
      <header className={classes.header}>
        <div className={classes['title-container']}>
          <button
            className={`${classes.btn} ${classes['menu-btn']}`}
            onClick={navToggleHandler}
          >
            <MenuIcon />
          </button>
          {navIsShown && <NavBar onClick={navToggleHandler} />}
          <h1 className={classes.h1}>sneakers</h1>
        </div>
        <ul className={classes.ul}>
          <Link href="/collections" className={classes.link}>
            Collections
          </Link>
          <Link href="/men" className={classes.link}>
            Men
          </Link>
          <Link href="/women" className={classes.link}>
            Women
          </Link>
          <Link href="/about" className={classes.link}>
            About
          </Link>
          <Link href="/contact" className={classes.link}>
            Contact
          </Link>
        </ul>
        <div className={classes['icon-container']}>
          <button
            className={classes['cart-btn']}
            onClick={cartCtx.toggleCartHandler}
          >
            <CartIcon />
            {cartCtx.total > 0 && (
              <p className={classes['cart-counter']}>{cartCtx.total}</p>
            )}
          </button>
          {cartCtx.cartState.cartIsShown && <Cart />}
          <Image
            src="/images/image-avatar.png"
            width={50}
            height={50}
            alt="avatar"
            className={classes.avatar}
          />
        </div>
      </header>
      <div className={classes.hl} />
    </>
  );
};

export default Header;
