import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="description" content="Dog Rescue in California and Nevada" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta name="keywords"
          content="Dog Rescue, Rescue Organization, Animal shelter, Dog Pounds, Abandoned Dogs, Abused Dogs, All Breed Dogs, Purebred dogs, Cocker Spaniels, dogs, cats, rescue, Southern California, Northern California, Riverside County, Romoland, Palo Alto, Las Vegas, Nevada" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        {/* social media */}
        <meta property="og:locale" content="en-US" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}