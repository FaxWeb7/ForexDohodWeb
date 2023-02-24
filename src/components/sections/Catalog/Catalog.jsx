import './catalog.scss'
import SectionDivider from '../../ui/SectionDivider/SectionDivider';
import { VscGraphLine } from 'react-icons/vsc'
import { CLIENT_URL } from '../../../constants/constants'
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import { CatalogList } from './CatalogList';

const Catalog = () => {
  return (
    <section className="catalog">
      <div className="anchor" id="catalog" />
      <div className="container">
        <SectionDivider color={'purple'} />
        <div className="catalog__inner">
          <SectionTitle title={'Торговые Роботы'} />
          <ul className="catalog__list">
            {CatalogList.map(({ title, text, profitLink }, id) => (
              <li className="catalog__item" key={id}>
                <img src={`${CLIENT_URL}/catalog/cardImg.jpg`} alt="img" className="catalog__item-img" />
                <h3 className="catalog__item-title">{title}</h3>
                <p className="catalog__item-text">{text}</p>
                <div className="catalog__item-btns">
                  <a href="https://t.me/faxweb_w" rel="noreferrer" target='_blank' className="catalog__item-btn">Связаться с нами</a>
                  <a href={profitLink} rel="noreferrer" target='_blank' className="catalog__item-btn tg"><VscGraphLine /></a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Catalog;