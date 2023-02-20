import React from 'react'
import './_global.scss'
import Header from './components/sections/Header/Header'
import Home from './components/sections/Home/Home'
import Catalog from './components/sections/Catalog/Catalog'

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Home />
      <Catalog />
    </div>
  )
}

export default App