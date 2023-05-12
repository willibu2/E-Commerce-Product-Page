import classes from './ImagesSection.module.css';
import Image from 'next/image';
import ImagesContext from '@/store/images-context';
import { useContext } from 'react';
import NextIcon from './UI/Icons/NextIcon';
import PrevIcon from './UI/Icons/PrevIcon';

const ImagesSection = () => {
  const imgCtx = useContext(ImagesContext);

  const smallImageClasses = (number) => {
    if (+number === imgCtx.imagesState.imageNumber) {
      return `${classes['small-img']} ${classes.active}`;
    }

    return `${classes['small-img']}`;
  };

  return (
    <div className={classes['img-container']}>
      <button
        className={classes['prev-btn-mobile']}
        onClick={imgCtx.onPrevHandler}
      >
        <PrevIcon />
      </button>
      <Image
        src={imgCtx.mainImageSource}
        alt="shoes"
        width={500}
        height={500}
        className={classes['main-img']}
        onClick={imgCtx.showModal}
      />
      <button
        className={classes['next-btn-mobile']}
        onClick={imgCtx.onNextHandler}
      >
        <NextIcon />
      </button>
      <div className={classes['small-images-container']}>
        <Image
          src="/images/image-product-1.jpg"
          alt="shoes1"
          width={100}
          height={100}
          className={smallImageClasses(1)}
          onClick={imgCtx.onImageClickHandler}
        />
        <Image
          src="/images/image-product-2.jpg"
          alt="shoes2"
          width={100}
          height={100}
          className={smallImageClasses(2)}
          onClick={imgCtx.onImageClickHandler}
        />
        <Image
          src="/images/image-product-3.jpg"
          alt="shoes3"
          width={100}
          height={100}
          className={smallImageClasses(3)}
          onClick={imgCtx.onImageClickHandler}
        />
        <Image
          src="/images/image-product-4.jpg"
          alt="shoes4"
          width={100}
          height={100}
          className={smallImageClasses(4)}
          onClick={imgCtx.onImageClickHandler}
        />
      </div>
    </div>
  );
};

export default ImagesSection;
