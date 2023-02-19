import logo from '../../../assets/logo2.png'
import { BsTelegram, BsYoutube } from 'react-icons/bs'
import { FiMenu } from 'react-icons/fi'
import './header.scss'
import { useState } from 'react'

const Header = () => {
  const [isBurger, setIsBurger] = useState(false);

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__inner'>
          <a href="/" className="header__logo">
            <img className='header__logo-img' src={logo} alt="logo" />
            <h1 className="header__logo-text">ForexDohod</h1>
          </a>
          <ul className="header__nav">
            <li className="header__nav-item">
              <a className="header__nav-link" href="#">Каталог</a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#">Доходность</a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#">Что такое Торговый Робот?</a>
            </li>
          </ul>
          <ul className="header__links">
            <li className="header__links-item">
              <a href="https://www.youtube.com/@Forex_Dohod" target='_blank'><BsYoutube className="header__link" /></a>
            </li>
            <li className="header__links-item">
              <a href="https://t.me/ForexDohod" target='_blank'><BsTelegram className='header__link' /></a>
            </li>
            <div className="header__burger">
              <FiMenu className='header__burger-icon' onClick={() => setIsBurger(!isBurger)} />
            </div>
          </ul>
          <div className={isBurger ? "header__burger-menu active" : "header__burger-menu"}>
            <a href="#" className="header__burger-item">Каталог</a>
            <a href="#" className="header__burger-item">Доходность</a>
            <a href="#" className="header__burger-item">Что такое Торговый Робот?</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;