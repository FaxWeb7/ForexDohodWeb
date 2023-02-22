import React from 'react'
import './_global.scss'
import Header from './components/sections/Header/Header'
import Home from './components/sections/Home/Home'
import Catalog from './components/sections/Catalog/Catalog'
import Profitability from './components/sections/Profitability/Profitability'
import Faq from './components/sections/Faq/Faq'

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Home />
      <Catalog />
      <Profitability />
      <Faq />
    </div>
  )
}

export default App