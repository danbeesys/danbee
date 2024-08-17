import faceimg from "./face.jpg";
import './Profile.css'

const Profile: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
      <div>
        <div className="doctor-image-container">
          <img src={faceimg} alt="이미지" />
          <button onClick={onClick}>심리 전문가 소개</button>
        </div>
        <div className="doctor-info">
          <h2>대표 인사말</h2>
          <p>안녕하세요? <br/>
  저희 심리상담연구소를 찾아주셔서 감사합니다.<br/>
  하루 하루가 즐겁고 만족스런 날이 되길 모두 소망합니다.<br/>
  그렇지만 어떤 날에는 후회로 울적하고, 어떤 날에는 예상하지 못했던 일로 온 세상을 얻는 기쁨을 갖기도 합니다. <br/>
  개인심리학의 창시자 아들러는 심리치료의 목표를 개인이 삶의 의무를 다하고, 현재의 삶을 그대로 받아들이며, 더 나은 대인관계를 갖도록 도와주고, 다른 사람들과 함께한다는 소속감을 키워나가도록 돕는 작업이라고 합니다. <br/>
  저희 연구소에서는 Wellness의 최상의 상태를 유지하는 삶을 살아가도록 생활양식을 재설정하고, 행동으로 옮길 수 있는 힘을 드리려고 합니다. <br/>
  갈등과 괴로움, 혼란스러운 마음이 들 때 당신의 이야기에 귀를 기울이고, 마음의 소리를 듣겠습니다.<br/>
  감사합니다.</p>
        <h3>마음을 듣고, 마음을 보고, 마음으로 만난다.</h3>
        </div>
      </div>
    );
  };

export default Profile;