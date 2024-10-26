import { HashLink } from 'react-router-hash-link';
import { isMobile } from "react-device-detect";
import logo from "./logo.png"
import './Navigation.css';

const Navigation: React.FC = () => {
    return (
      <nav className="main-nav">
        <HashLink to="/danbee"><img src={logo} alt="logo" className='logo' /></HashLink>
        <ul>
          <HashLink to="/danbee/main#intro"><li>단비 소개</li></HashLink>
          { isMobile ? (<></>) : (<>
          <HashLink to="/danbee/main#fields"><li>상담 분야</li></HashLink>
          <HashLink to="/danbee/main#program"><li>Special 프로그램</li></HashLink>
          <HashLink to="/danbee/main#process"><li>상담 절차</li></HashLink>
          <HashLink to="/danbee/main#story"><li>단비 스토리</li></HashLink></>)}
          <HashLink to="/danbee/diagnosis"><li>자가진단</li></HashLink>
        </ul>
      </nav>
    );
  };

  export default Navigation;