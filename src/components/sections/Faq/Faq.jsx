import SectionDivider from '../../ui/SectionDivider/SectionDivider';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import './faq.scss'

const Faq = () => {
  return (
    <div className="faq" id="what">
      <div className="container">
        <SectionDivider color={'green'} />
        <div className="faq__inner">
          <SectionTitle title='Что за Торговый Робот?' />
        </div>
      </div>
    </div>
  );
}

export default Faq;