import logo from '../../assets/logo.png'
import './header.scss'

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__inner'>
          <div className="header__logo">
            <img className='header__logo-img' src={logo} alt="logo" />
            <h1 className="header__logo-text">ForexDohod</h1>
          </div>
          <ul className="header__nav">
            <li className="header__nav-item">
              <a className="header__nav-link" href="">Каталог Торговых Роботов</a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="">Доходность Торговых Роботов</a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="">Что такое Торговый Робот?</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header;