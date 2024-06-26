import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CTAA from '@/components/CTA-B'
import CockeCounty from '@/components/CockeCounty'
import OurServices from '@/components/OurServices'
import ServicesExtended from '@/components/OurServicesExt'

export default function CockeCountyPage() {
  return (
    <>
      <Head>
        <title>JonesCo Seamless Gutter Systems || Cocke County</title>
        <meta name="theme-color" content="#C5F5CA" />
        <meta
          name="description"
          content="Expert gutter installations and services in Cocke County, TN. Discover how JonesCo Seamless Gutter Systems can protect your home with top-quality gutter solutions."
        />
        <meta name="keywords" content="Seamless Gutter Installation, Gutter Replacement, Gutter Cleaning, Gutter Guards Installation, Custom Gutter Solutions, Downspout Installation, Cocke County, Newport, Parrottsville, Cosby, Del Rio" />
        <meta name="author" content="JonesCo Seamless Gutter Systems" />
        <meta property="og:title" content="JonesCo Seamless Gutter Systems || Cocke County" />
        <meta property="og:description" content="Expert gutter installations and services in Cocke County, TN. Discover how JonesCo Seamless Gutter Systems can protect your home with top-quality gutter solutions." />
        <meta property="og:url" content="https://jonescogutters.com/cocke" />
        <meta property="og:type" content="website" />
      </Head>
      
      <Header />
      <main>
        <CockeCounty />
        <CTAA />
      </main>
      <Footer />
    </>
  )
}
