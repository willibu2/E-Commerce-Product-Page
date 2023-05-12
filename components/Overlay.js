import classes from './Overlay.module.css';
import ImagesSection from './ImagesSection';
import CloseIcon from './UI/Icons/CloseIcon';
import NextIcon from './UI/Icons/NextIcon';
import PrevIcon from './UI/Icons/PrevIcon';
import ImagesContext from '@/store/images-context';
import { useContext } from 'react';

const Overlay = () => {
  const imgCtx = useContext(ImagesContext);

  return (
    <>
      <div className={classes.main}>
        <button className={classes['close-btn']} onClick={imgCtx.closeModal}>
          <CloseIcon />
        </button>
        <button className={classes['prev-btn']} onClick={imgCtx.onPrevHandler}>
          <PrevIcon />
        </button>
        <button className={classes['next-btn']} onClick={imgCtx.onNextHandler}>
          <NextIcon />
        </button>
        <ImagesSection />
      </div>
      <div className={classes.backdrop} onClick={imgCtx.closeModal} />
    </>
  );
};

export default Overlay;
