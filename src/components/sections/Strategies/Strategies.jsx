import './strategies.scss'
import SectionDivider from '../../ui/SectionDivider/SectionDivider';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import { AiFillGolden } from 'react-icons/ai'
import { BsCurrencyExchange } from 'react-icons/bs'
import { CurrencyStrategy, GoldStrategy } from './StrategiesTexts';

const Strategies = () => {
  return (
    <div className="strategies">
      <div className="anchor" id="strategies" />
      <div className="container">
        <SectionDivider color={'purple'} />
        <div className="strategies__inner">
          <SectionTitle title={'Стратегии торговли'} />
          <div className="strategies__list">
            <div className="strategies__item">
              <div className="strategies__item-info">
                <AiFillGolden />
                <div className="strategies__item-info-wrapper">
                  <h1 className="strategies__item-info-title">Золотой робот</h1>
                  <p className="strategies__item-info-subtitle">Консервативная стратегия</p>
                </div>
              </div>
              <p className="strategies__item-text">{GoldStrategy}</p>
            </div>
            <div className="strategies__item">
              <div className="strategies__item-info">
                <BsCurrencyExchange />
                <div className="strategies__item-info-wrapper">
                  <h1 className="strategies__item-info-title">Валютный робот</h1>
                  <p className="strategies__item-info-subtitle">Умеренно-агрессивная стратегия</p>
                </div>
              </div>
              <p className="strategies__item-text">{CurrencyStrategy}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Strategies;