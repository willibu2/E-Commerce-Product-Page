import classes from './SingleItem.module.css';
import Image from 'next/image';
import CloseIcon from '../UI/Icons/CloseIcon';

const SingleItem = ({ id, name, price, quantity, onClick }) => {
  const imgSrc = `/images/image-product-${id}-thumbnail.jpg`;

  return (
    <div className={classes['single-item']}>
      <Image
        className={classes['item-img']}
        src={imgSrc}
        width={50}
        height={50}
        alt="small picture"
      />
      <div className={classes['item-info-container']}>
        <p className={classes['item-name']}>{name}</p>
        <p className={classes['item-price']}>
          {`$${price} x ${quantity}`}{' '}
          <span className={classes.total}>{`$${price * quantity}`}</span>
        </p>
      </div>
      <button className={classes['remove-btn']} onClick={onClick}>
        <CloseIcon />
      </button>
    </div>
  );
};

export default SingleItem;
