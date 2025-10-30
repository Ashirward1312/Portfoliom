import React from 'react'
import Hero from './pages/home/Hero.jsx'
import Header from './pages/Header/Header.jsx'
import About from './pages/about/About.jsx'
import Expert from './pages/Experties/Expert.jsx'
import Transactions from './pages/transactions/Transactions.jsx'
import Testimonials from './pages/Testomonials/Testomonials.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Footer from './pages/Footer/Footer.jsx'


function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Expert />
      <Transactions />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App