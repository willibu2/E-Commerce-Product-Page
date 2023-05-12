import '@/styles/globals.css';
import ImagesContextProvider from '@/store/ImagesContextProvider';
import CartContextProvider from '@/store/CartContextProvider';

export default function App({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <ImagesContextProvider>
        <Component {...pageProps} />
      </ImagesContextProvider>
    </CartContextProvider>
  );
}
