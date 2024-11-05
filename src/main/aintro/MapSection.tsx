import map from "./pic/map.png";
import navermap from "./pic/navermap.jpg";
import './MapSection.css';
import { isMobile } from "react-device-detect";

const comeWay = "서현역 하차 -> AK플라자 2층 -> 서현역 고가차도 좌측 건넘 -> 서현파크 프라자";

const MapSection: React.FC = () => {
    return (
      <section id="visit" className="map-section">
        {isMobile ? null :
        <div className="map">
          <img src={map}/>
        </div>}
        <div className="map-info">
          <div className="map_info_title">
          <h2>주소</h2>
          <a href="https://naver.me/5Eaw2cd3" target='_blank'>
            <img src={navermap}/>
          </a>
          </div>
          <p>경기 성남시 분당구 서현동 89 서현파크 프라자 313호</p>
          <h2>오시는 길</h2>
          <p>{comeWay}</p>
        </div>
      </section>
    );
  };

export default MapSection;