import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>DPS Rescue</title>
        <meta name="description" content="Dog Rescue in California and Nevada" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta name="keywords"
          content="Dog Rescue, Rescue Organization, Animal shelter, Dog Pounds, Abandoned Dogs, Abused Dogs, All Breed Dogs, Purebred dogs, Cocker Spaniels, dogs, cats, rescue, Southern California, Northern California, Riverside County, Romoland, Palo Alto, Las Vegas, Nevada" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,900|Volkhov" rel="stylesheet" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}