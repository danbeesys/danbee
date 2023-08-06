import Header from "../header/Header";
import arrow from "./arrow.jpg";
import style from "./Process.module.css"
import {Link} from "react-router-dom";
function Process() {
    const process1 = "상담 예약\n전화 예약\n온라인 예약";
    const process2 = "연구소 방문\n예약시간 10분전 방문";
    const process3 = "초기 상담\n향후 치료방향\n검사필요여부 결정";
    const process4 = "심리 검사\n대상자에 한하여 실시";
    const process5 = "진단평가\n검사 해석";
    const process6 = "치료 프로그램 진행";

    return (
        <div>
            <Header />
            <div>
                <h1>개인상담</h1>
                <p>개인이 일상에서 겪고 있는 심리적인 어려움을 이야기하고 해결하여 안정되고 편안하게
                    대인과 관계를 형성하고, 사회생활을 영위할 수 있게 합니다. </p>
                <h2>아동•청소년</h2>
                <p>성장과정에서 마주하게 되는 우울, 불안, 스트레스, 낮은 자존감 등 심리 정서적 어려움
                    의 원인을 찾아내고 건강하게 성장할 수 있도록 돕습니다. </p>
                <h2>성인</h2>
                <p>일상에서 경험하는 대인관계의 어려움, 가족간의 갈등과 어려움, 미해결과제의 해결, 미
                    래 설계 등 현재의 심리적 어려움을 해결하는 고리를 찾을 수 있게 도와드립니다. </p>
                <h2>성인</h2>
                <p> 학업계획수립과 실행에 대한 코칭</p>
                <p> 집중력을 높이기 위한 심리 안정화 작업 실시</p>
                <p> 불안을 낮추기 위한 내면 강화 프로그램 적용</p>
                <p> 동기화를 위한 심상 기법 사용</p>
                <h1>집단상담</h1>
                <h3>심리적인 문제가 심각하지 않은 사람들이 집단을 형성하여 전문적인 상담사와 집단원들의
                    신뢰와 허용의 분위기 속에서 이해와 수용, 지지를 받는 작업을 통해 개인의 태도와 행동을
                    변화시키고 자신의 잠재능력을 성장시키는 활동입니다. </h3>
                <p>청소년, 청년, 성인, 노인들을 대상으로 발달단계에 따른 프로그램을 실시합니다. </p>
                <p>행복한 내 아이를 위한 학부모 상담 ‘긍정훈육 프로그램’을 진행합니다.</p>
                <h1>독서치료</h1>
                <h3>그림책은 전 연령이 읽을 수 있으며, 그림과 글로 마음을 이야기하기에 적당합니다. 자신
                    의 이야기를 하기 어려워하는 아동·청소년들의 경우 그림책을 사용하여 상담을 하기도 합니
                    다. 그림책은 내면에 담긴 이야기를 부담없이 표현하는데 알맞은 도구입니다.</h3>
                <p>그림책 테라피 </p>
            </div>
            <div>
                <h1>상담절차</h1>
                <div className={style.process__box}>
                    <div className={style.process__arrow}>{process1}</div>
                    <img className={style.process__arrow} src={arrow} width="50px"/>
                    <div className={style.process__arrow}>{process2}</div>
                    <img className={style.process__arrow} src={arrow} width="50px"/>
                    <div className={style.process__arrow}>{process3}</div>
                    <img className={style.process__arrow} src={arrow} width="50px"/>
                    <div className={style.process__arrow}>{process4}</div>
                    <img className={style.process__arrow} src={arrow} width="50px"/>
                    <div className={style.process__arrow}>{process5}</div>
                    <img className={style.process__arrow} src={arrow} width="50px"/>
                    <div className={style.process__arrow}>{process6}</div>
                </div>
                <div>
                    <h3>예약방법</h3>
                    <p>전화 문의 : 031-714-1714</p>
                    <p>카카오톡 : 031-714-1714</p>
                </div>
                <div>
                    <h3>상담방법</h3>
                    <p>대면 상담 또는 화상 상담(ZOOM)</p>
                </div>
            </div>
            <Link to={"/request"}>상담신청서</Link>
        </div>);
}

export default Process