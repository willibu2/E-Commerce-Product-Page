import ImagesContext from './images-context';
import { useReducer } from 'react';

const initialValue = {
  modalIsShown: false,
  imageNumber: 1,
};

const imagesReducer = (state, action) => {
  if (action.type === 'SHOWMODAL') {
    console.log('SHOWMODAL');
    return { ...state, modalIsShown: true };
  }

  if (action.type === 'CLOSEMODAL') {
    return { ...state, modalIsShown: false };
  }

  if (action.type === 'NEXT') {
    if (state.imageNumber == 4) {
      return { ...state, imageNumber: 1 };
    }

    return {
      ...state,
      imageNumber: state.imageNumber + 1,
    };
  }

  if (action.type === 'PREV') {
    if (state.imageNumber == 1) {
      return { ...state, imageNumber: 4 };
    }

    return { ...state, imageNumber: state.imageNumber - 1 };
  }

  if (action.type === 'IMAGECLICK') {
    return { ...state, imageNumber: action.value };
  }

  return initialValue;
};

const ImagesContextProvider = (props) => {
  const [imagesState, dispatchImagesAction] = useReducer(
    imagesReducer,
    initialValue
  );

  const showModal = () => {
    dispatchImagesAction({ type: 'SHOWMODAL' });
  };

  const closeModal = () => {
    dispatchImagesAction({ type: 'CLOSEMODAL' });
  };

  const onNextHandler = () => {
    dispatchImagesAction({ type: 'NEXT' });
  };

  const onPrevHandler = () => {
    dispatchImagesAction({ type: 'PREV' });
  };

  const onImageClickHandler = (e) => {
    const valueString = e.target.alt.slice(-1);
    const valueNumber = +valueString;

    dispatchImagesAction({ type: 'IMAGECLICK', value: valueNumber });
  };

  const mainImageSource = `/images/image-product-${imagesState.imageNumber}.jpg`;

  const imagesContextData = {
    imagesState,
    showModal,
    closeModal,
    onNextHandler,
    onPrevHandler,
    mainImageSource,
    onImageClickHandler,
  };

  return (
    <ImagesContext.Provider value={imagesContextData}>
      {props.children}
    </ImagesContext.Provider>
  );
};

export default ImagesContextProvider;
