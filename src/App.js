import React from 'react'
import './_global.scss'
import Header from './components/sections/Header/Header'
import Home from './components/sections/Home/Home'

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Home />
    </div>
  )
}

export default App