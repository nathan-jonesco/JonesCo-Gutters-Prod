import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CTAA from '@/components/CTA-B'
import OurServices from '@/components/OurServices'

export default function Home() {
  return (
    <>
      <Head>
        <title>JonesCo Seamless Gutter Systems || Services</title>
        <meta name="theme-color" content="#C5F5CA" />
        <meta
          name="description"
          content="Expert gutter installations and services in Eastern Tennessee. Protect your home with JonesCo Seamless Gutter Systems' top-quality gutter solutions."
        />
        <meta name="keywords" content="Seamless Gutter Installation, Gutter Replacement, Gutter Cleaning, Gutter Guards Installation, Custom Gutter Solutions, Downspout Installation, Eastern Tennessee, Newport, Dandridge, Morristown, Greeneville, Sevierville, Johnson City, Knoxville, Maryville" />
        <meta name="author" content="JonesCo Seamless Gutter Systems" />
        <meta property="og:title" content="JonesCo Seamless Gutter Systems || Services" />
        <meta property="og:description" content="Expert gutter installations and services in Eastern Tennessee. Protect your home with JonesCo Seamless Gutter Systems' top-quality gutter solutions." />
        <meta property="og:url" content="https://jonescogutters.com/services" />
        <meta property="og:type" content="website" />
      </Head>
      
      <Header />
      <main>
        <OurServices />
        <CTAA />
      </main>
      <Footer />
    </>
  )
}
