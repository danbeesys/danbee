import map from "../pic/map.PNG";
import './MapSection.css';

const MapSection: React.FC = () => {
    return (
      <section id="visit" className="map-section">
        <div className="map">
          <img src={map}/>
        </div>
        <div className="map-info">
          <h2>오시는 길</h2>
          <p>경기 성남시 분당구 서현동 89</p>
          <h2>연락처</h2>
          <p>카카오톡: abcde 전화번호: (031) 714-1714</p>
          <h2>영업시간</h2>
          <p>평일 : 오전 10시 ~ 오후 7시<br/>(평일 2일은 야간 상담 진행. 오후 9시까지)</p>
          <p>토요일 : 오전 10시 ~ 오후 5시</p>
        </div>
      </section>
    );
  };

export default MapSection;