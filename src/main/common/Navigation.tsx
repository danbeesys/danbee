import { Link } from "react-router-dom";
import logo from "./logo.png"
import './Navigation.css';

const Navigation: React.FC = () => {
    return (
      <nav className="main-nav">
        <Link to="/"><img src={logo} alt="logo" className='logo' /></Link>
        <ul>
          <a href="/danbee/main#intro"><li>단비 소개</li></a>
          <a href="/danbee/main#fields"><li>상담 분야</li></a>
          <a href="/danbee/main#program"><li>프로그램</li></a>
          <a href="/danbee/main#process"><li>상담 절차</li></a>
          <a href="/danbee/main#story"><li>단비 스토리</li></a>
          <Link to="/danbee/diagnosis"><li>자가진단</li></Link>
        </ul>
      </nav>
    );
  };

  export default Navigation;