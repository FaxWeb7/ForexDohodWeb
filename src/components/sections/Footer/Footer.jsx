import './footer.scss'
import { BsYoutube, BsTelegram } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__inner">
          <h1 className="footer__title">Copyright Ⓒ 2023 ForexDohod. All Rights Reserved.</h1>
          <div className="footer__links">
              <a href="https://www.youtube.com/@Forex_Dohod" target='_blank' rel="noreferrer"><BsYoutube className="footer__link" /></a>
              <a href="https://t.me/ForexDohod" rel="noreferrer" target='_blank'><BsTelegram className='footer__link' /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;