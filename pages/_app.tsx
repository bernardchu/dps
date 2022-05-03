import DpsApp from '../src/DpsApp'
import '../src/DpsApp.scss';

export default function MyApp({ Component, pageProps }) {
  return <>
    <DpsApp>
      <Component {...pageProps} />
    </DpsApp>
  </>
}