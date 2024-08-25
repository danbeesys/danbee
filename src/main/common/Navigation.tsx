import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import logo from "./logo.png"
import './Navigation.css';

const Navigation: React.FC = () => {
    return (
      <nav className="main-nav">
        <Link to="/danbee"><img src={logo} alt="logo" className='logo' /></Link>
        <ul>
          <Link to="/danbee/main#intro"><li>단비 소개</li></Link>
          { isMobile ? (<></>) : (<>
          <Link to="/danbee/main#fields"><li>상담 분야</li></Link>
          <Link to="/danbee/main#program"><li>Special 프로그램</li></Link>
          <Link to="/danbee/main#process"><li>상담 절차</li></Link>
          <Link to="/danbee/main#story"><li>단비 스토리</li></Link></>)}
          <Link to="/danbee/diagnosis"><li>자가진단</li></Link>
        </ul>
      </nav>
    );
  };

  export default Navigation;