import Header from '@/components/Header';
import MainSection from '@/components/MainSection';
import Overlay from '@/components/Overlay';
import { useContext, useEffect } from 'react';
import ImagesContext from '@/store/images-context';

export default function Home() {
  const ctx = useContext(ImagesContext);
  const modalIsShown = ctx.imagesState.modalIsShown;

  useEffect(() => {
    if (modalIsShown) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [modalIsShown]);

  return (
    <>
      {modalIsShown && <Overlay />}
      <Header />
      <MainSection />
    </>
  );
}
