import './conditions.scss'
import SectionDivider from "../../ui/SectionDivider/SectionDivider";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";

const Conditions = () => {
  return (
    <div className="conditions" id="conditions">
      <div className="container">
        <SectionDivider color={'purple'} />
        <div className="conditions__inner">
          <SectionTitle title={'Условия подключения'} /> 
          Conditions
        </div>
      </div>
    </div>
  );
}

export default Conditions;