// App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Hero from './pages/home/Hero.jsx'
import Header from './pages/Header/Header.jsx'
import About from './pages/about/About.jsx'
import Expert from './pages/Experties/Expert.jsx'
import Transactions from './pages/transactions/Transactions.jsx'
import Testimonials from './pages/Testomonials/Testomonials.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Footer from './pages/Footer/Footer.jsx'
import Achievements from './pages/Achievement/Achievement.jsx'
import Ex from './pages/Expert/Ex.jsx'
import Gallery from './pages/Gallery/Gallery.jsx'

// Home page ka layout alag component bana diya
function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Achievements />
      <Ex />
      <Expert />
      <Transactions />
      <Testimonials />
      <Contact />
    </>
  )
}

function App() {
  return (
    <Router>
      {/* Header sab pages pe common rahega */}
      <Header />

      <Routes>
        {/* Home page -> "/" */}
        <Route path="/" element={<HomePage />} />

        {/* Gallery page -> "/gallery" */}
        <Route path="/gallery" element={<Gallery />} />

        {/* Optional: 404 page
        <Route path="*" element={<h1 style={{ color: 'white' }}>Page Not Found</h1>} />
        */}
      </Routes>

      {/* Footer bhi sab pages pe common rahega */}
      <Footer />
    </Router>
  )
}

export default App