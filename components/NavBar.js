import classes from './NavBar.module.css';
import Link from 'next/link';
import CloseIcon from './UI/Icons/CloseIcon';

const NavBar = (props) => {
  return (
    <>
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          <button className={classes.btn} onClick={props.onClick}>
            <CloseIcon />
          </button>
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
      </nav>
      <div className={classes.backdrop} />
    </>
  );
};

export default NavBar;
