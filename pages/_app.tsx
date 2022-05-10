import { ReactElement } from 'react';
import DpsApp from '../src/DpsApp'
import '../src/DpsApp.scss';

export function defaultLayout(page: ReactElement) {
  return <>
    <DpsApp>
      {page}
    </DpsApp>
  </>
}

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? (defaultLayout)
  return getLayout(<Component{...pageProps} />);
}