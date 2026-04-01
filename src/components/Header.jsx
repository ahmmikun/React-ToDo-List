import logo from '../assets/react.svg';

export default function Header() {
  return (
   <>
   <header>
    <div className="logo">
        <img src={logo} alt="Logo" />
        <span>Task App</span>
    </div>
    <div className="themeSelector">
        <span className="light"></span>
        <span className="Dark activeTheme"></span>
        <span className="medium"></span>
        <span className="gOne"></span>
        <span className="gTwo"></span>
        <span className="gThree"></span>
    </div>
   </header>
   </>
  )
}