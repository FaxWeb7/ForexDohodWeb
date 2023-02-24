import BgAnim from '../../ui/BgAnim/BgAnim';
import { BsTelegram } from 'react-icons/bs'
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import './home.scss'

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="home__inner">
          <div className="home__info">
            <SectionTitle title={<>Приветствую вас в<br />ForexDohod!</>} />
            <p className="home__info-text">ForexDohod - сайт по продаже ряда торговых форекс-роботов, написанных на уникальнейших алгоритмах и приносящих реальный пассивный доход путем трейдинга на бирже Форекс.</p>
            <p className="home__info-text">Также у нас есть телеграм-канал, в котором мы публикуем некоторые сделки торгового робота, переходите и убеждайтесь в его доходности.</p>
            <div className="home__info-buttons">
            <a href="#catalog" className="home__info-btn">Смотреть каталог</a>
            <a href="https://t.me/ForexDohod" rel="noreferrer" target='_blank' className="home__info-btn"><BsTelegram /></a>
            </div>
          </div>
          <div className="home__bg">
            <BgAnim />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;