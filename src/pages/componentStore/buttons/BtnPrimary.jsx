import './btnPrimary.scss';

const BtnPrimary = ({btnText, icon}) => {
  return (
    <button>{btnText} {icon}</button>
  )
}

export default BtnPrimary