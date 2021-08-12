import '../styles/globals.css'
import "../components/table/style.css"
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-180816677-1"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-180816677-1');`}}>

        </script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
