import './faq.scss'
import SectionDivider from '../../ui/SectionDivider/SectionDivider';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import { CLIENT_URL } from '../../../constants/constants'
import { FaqText } from './FaqText';
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react';

const Faq = () => {
  const [isModal, setIsModal] = useState('')

  return (
    <>
      <div className="faq" id="what">
        <div className="container">
          <SectionDivider color={'purple'} />
          <div className="faq__inner">
            <SectionTitle title='Что за Торговый Робот?' />
            <div className="faq__info">
              <h5 className="faq__info-text">
              {FaqText}
              </h5>
              <img src={`${CLIENT_URL}/faq/faqImg1.png`} onClick={() => setIsModal(`${CLIENT_URL}/faq/faqImg1.png`)} alt="img" className="faq__info-img" />
            </div>
          </div>
        </div>
      </div>
      {isModal && (
        <div className="faq__modal">
          <AiOutlineClose className="faq__modal-btn" onClick={() => setIsModal('')} />
          <img className="faq__modal-img" src={isModal} alt='img' />
        </div>
      )}
    </>
  );
}

export default Faq;