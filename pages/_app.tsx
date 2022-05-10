import Head from 'next/head';
import { ReactElement } from 'react';
import DpsApp from '../src/DpsApp'
import '../src/DpsApp.scss';
import { pageTitle } from '../src/common/DpsConstants'

export function defaultLayout(page: ReactElement) {
  return <>
    <Head>
      <title>{pageTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <DpsApp>
      {page}
    </DpsApp>
  </>
}

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? (defaultLayout)
  return getLayout(<Component{...pageProps} />);
}