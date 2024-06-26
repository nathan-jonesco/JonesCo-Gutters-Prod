import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CTAD from '@/components/CTA-D'
import John from '@/components/Why'

export default function Home() {
  return (
    <>
      <Head>
        <title>JonesCo Seamless Gutter Systems || Why Us?</title>
        <meta name="theme-color" content="#C5F5CA" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Discover why JonesCo Seamless Gutter Systems is the top choice for expert gutter installations and services. Experience lasting home protection with our quality solutions."
        />
        <meta name="keywords" content="Why Us, Seamless Gutter Installation, Gutter Replacement, Gutter Cleaning, Gutter Guards Installation, Custom Gutter Solutions, Downspout Installation, Eastern Tennessee" />
        <meta name="author" content="JonesCo Seamless Gutter Systems" />
        <meta property="og:title" content="JonesCo Seamless Gutter Systems || Why Us?" />
        <meta property="og:description" content="Discover why JonesCo Seamless Gutter Systems is the top choice for expert gutter installations and services. Experience lasting home protection with our quality solutions." />
        <meta property="og:url" content="https://jonescogutters.com/why" />
        <meta property="og:type" content="website" />
      </Head>
      <Banner />
      <Header />
      <main>
        <John />
        <CTAD />
      </main>
      <Footer />
    </>
  )
}
