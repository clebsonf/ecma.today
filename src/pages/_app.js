import Head from 'next/head'
import '../../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <meta charset="UTF-8"/>
      <title>ECMA.TODAY</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://ecma.today" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Clebson Augusto Fonseca" />
    </Head>
    <Component {...pageProps} />
  </>)
}

export default MyApp
