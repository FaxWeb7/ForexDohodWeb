import React from 'react'
import './_global.scss'
import Header from './components/sections/Header/Header'
import Home from './components/sections/Home/Home'
import Catalog from './components/sections/Catalog/Catalog'
import Profitability from './components/sections/Profitability/Profitability'
import Faq from './components/sections/Faq/Faq'
import Strategies from './components/sections/Strategies/Strategies'
import Conditions from './components/sections/Conditions/Conditions'

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Home />
      <Catalog />
      <Profitability />
      <Faq />
      <Strategies />
      <Conditions />
    </div>
  )
}

export default App