import React from 'react'
import './_global.scss'
import Header from './components/sections/Header/Header'
import Home from './components/sections/Home/Home'
import Catalog from './components/sections/Catalog/Catalog'
import Profitability from './components/sections/Profitability/Profitability'
import Faq from './components/sections/Faq/Faq'
import Strategies from './components/sections/Strategies/Strategies'
import Footer from './components/sections/Footer/Footer'

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Home />
      <Faq />
      <Catalog />
      <Profitability />
      <Strategies />
      <Footer />
    </div>
  )
}

export default App