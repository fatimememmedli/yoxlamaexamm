import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../sections/hero/Hero'
import Products from '../../sections/products/Products'
import Categories from '../../sections/Categories/Categories'
import ForMan from '../../sections/forMan/ForMan'
import Footer from '../../components/footer/Footer'
import Searched from '../../sections/Searched/Searched'

function Home() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Hero/>
      <Categories/>
      <ForMan/>

      <Products/>
      <Searched/>
      <Footer/>
    </div>
  )
}

export default Home
