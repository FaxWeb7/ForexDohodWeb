import './profitability.scss'
import SectionDivider from '../../ui/SectionDivider/SectionDivider';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import { CLIENT_URL } from '../../../constants/constants'
import { ProfitabilityText } from './ProfitabilityText'
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'

const Profitability = () => {
  const [isModal, setIsModal] = useState('')

  return (
    <>
      <div className="profit">
        <div className="anchor" id="profitability" />
        <div className="container">
          <SectionDivider color={'purple'} />
          <div className="profit__inner">
            <SectionTitle title={'Доходность'} />
            <div className="profit__info">
              <p className="profit__info-text">
              {ProfitabilityText}
              </p>
              <div className="profit__info-imgs">
                <img src={`${CLIENT_URL}/profitability/profitImg1.png`} className="profit__info-img" alt='img' onClick={() => setIsModal(`${CLIENT_URL}/profitability/profitImg1.png`)} />
                <img src={`${CLIENT_URL}/profitability/profitImg2.png`} className="profit__info-img 2" alt='img' onClick={() => setIsModal(`${CLIENT_URL}/profitability/profitImg2.png`)} />
                <img src={`${CLIENT_URL}/profitability/profitImg3.gif`} className="profit__info-img 3" alt='img' onClick={() => setIsModal(`${CLIENT_URL}/profitability/profitImg3.gif`)} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModal && (
        <div className="profit__modal">
          <AiOutlineClose className="profit__modal-btn" onClick={() => setIsModal('')} />
          <img className="profit__modal-img" src={isModal} alt='img' />
        </div>
      )}
    </>
  );
}

export default Profitability;