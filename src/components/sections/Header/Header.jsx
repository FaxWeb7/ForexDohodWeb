import logo from '../../../assets/logo.png'
import { BsTelegram, BsYoutube, BsGraphUp, BsQuestionDiamond } from 'react-icons/bs'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineAppstore } from 'react-icons/ai'
import { VscChromeClose } from 'react-icons/vsc'
import './header.scss'
import { useState } from 'react'

const Header = () => {
  const [isBurger, setIsBurger] = useState(false);

  return (
    <div className='header'>
      <div className='container'>
        <div className='header__inner'>
          <a href="/" className="header__logo">
            <img className='header__logo-img' src={logo} alt="logo" />
            <h1 className="header__logo-text">ForexDohod</h1>
          </a>
          <ul className="header__nav">
            <li className="header__nav-item">
              <a className="header__nav-link" href="#catalog"><AiOutlineAppstore />Каталог</a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#profitability"><BsGraphUp />Доходность</a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#what"><BsQuestionDiamond />Что такое Торговый Робот?</a>
            </li>
          </ul>
          <ul className="header__links">
            <li className="header__links-item">
              <a href="https://www.youtube.com/@Forex_Dohod" target='_blank' rel="noreferrer"><BsYoutube className="header__link" /></a>
            </li>
            <li className="header__links-item">
              <a href="https://t.me/ForexDohod" rel="noreferrer" target='_blank'><BsTelegram className='header__link' /></a>
            </li>
            <div className="header__burger">
              {!isBurger ? (<FiMenu className='header__burger-icon' onClick={() => setIsBurger(!isBurger)} />) : (<VscChromeClose className='header__burger-icon' onClick={() => setIsBurger(!isBurger)} />)}
            </div>
          </ul>
        </div>
      </div>
      <div className={isBurger ? "header__burger-menu active" : "header__burger-menu"}>
        <a href="#catalog" className="header__burger-item" onClick={() => setIsBurger(!isBurger)} ><AiOutlineAppstore size={16} />Каталог</a>
        <a href="#profitability" className="header__burger-item" onClick={() => setIsBurger(!isBurger)} ><BsGraphUp size={16} />Доходность</a>
        <a href="#what" className="header__burger-item" onClick={() => setIsBurger(!isBurger)} ><BsQuestionDiamond size={18} />Что такое Торговый Робот?</a>
      </div>
    </div>
  )
}

export default Header;