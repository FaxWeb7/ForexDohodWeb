import './profitability.scss'
import SectionDivider from '../../ui/SectionDivider/SectionDivider';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import profitImg1 from '../../../assets/profitImg1.png'
import profitImg2 from '../../../assets/profitImg2.png'
import profitImg3 from '../../../assets/profitImg3.gif'
import { ProfitabilityText } from './ProfitabilityText'
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'

const Profitability = () => {
  const [isModal, setIsModal] = useState('')

  return (
    <>
      <div className="profit" id='profitability'>
        <div className="container">
          <SectionDivider color={'green'} />
          <div className="profit__inner">
            <SectionTitle title={'Доходность'} />
            <div className="profit__info">
              <p className="profit__info-text">
              {ProfitabilityText}
              </p>
              <div className="profit__info-imgs">
                <img src={profitImg1} className="profit__info-img" alt='img' onClick={() => setIsModal(profitImg1)} />
                <img src={profitImg2} className="profit__info-img 2" alt='img' onClick={() => setIsModal(profitImg2)} />
                <img src={profitImg3} className="profit__info-img 3" alt='img' onClick={() => setIsModal(profitImg3)} />
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