import './sectiondivider.scss'

const SectionDivider = ({ color }) => {
  return (
    <>
      {color === 'green' ? (
        <div className='section__divider green'></div>
      ) : (
        <div className='section__divider purple'></div>
      )}
    </>
  );
}

export default SectionDivider;