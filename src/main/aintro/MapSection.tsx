import map from "./pic/map.png";
import './MapSection.css';

const MapSection: React.FC = () => {
    return (
      <section id="visit" className="map-section">
        <div className="map">
          <img src={map}/>
        </div>
        <div className="map-info">
          <h2>주소</h2>
          <p>경기 성남시 분당구 서현동 89 서현파크 프라자</p>
          <h2>오시는길</h2>
          <p>서현역 하차 - AK플라자 2층 - 서현역 고가차도 좌측 건넘 - 서현파크 프라자 </p>
        </div>
      </section>
    );
  };

export default MapSection;