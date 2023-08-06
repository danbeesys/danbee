import Header from "../header/Header";
import picture from "./pic.png";
import style from "./Adviser.module.css";

function Adviser() {
    const profile = "상담경력 11년\n" +
        "학력 충남대학교 문과대학 국어국문학과 학사\n" +
        " 평택대학교 상담대학원 특수상담학과 독서치료 전공 석사\n" +
        " 평택대학교 일반대학원 상담학과 박사 \n" +
        "상담이론: 개인심리학, 정신분석, 대상관계\n" +
        "자격증 국제아들러심리상담사(NASAP)\n" +
        " 한국상담학회 전문상담사 2급\n" +
        " 한국독서치료학회 독서심리전문상담사\n" +
        " 아들러 긍정훈육 부모교육 1급 \n" +
        " 한국시치료학회 1급\n" +
        " 정신보건 상담사 2급\n" +
        "대표이력\n" +
        " 현재 • 현, 단비심리상담연구소 대표\n" +
        " • 현, 법무부 서울동부 준빕지원센터 보호관찰 위원\n" +
        " • 현, 대건청소년상담소\n" +
        " • 전, 구리 인창도서관 집단 독서치료\n" +
        " • 전, 하남 덕풍 중학교 집단 독서치료\n" +
        " • 전, 용인 송전 초등학교 집단 독서치료\n" +
        " • 전, 수원시 청소년 상담복지센터 집단지도자\n" +
        " • 전, 살레시오 청소년 센터 집단 독서치료\n" +
        " • 전, 양주 은봉 초등학교 집단 독서치료\n" +
        " • 전, 0000부대 군역량강화 독서치료\n" +
        " • 전, 21사단 군역량강화 집단상담\n" +
        " • 전, 0000부대 또래상담자 교육 \n" +
        " • 전, 수도방위사령부 군역량강화 집단상담\n" +
        " • 전, 유한대학교 객원 상담사\n" +
        " • 전, 유아와 엄마를 위한 집단 독서치료\n" +
        " • 전, 교육부 학교폭력예방 프로그램 어울림 강사 \n" +
        " (학생 교육, 충남 ·경기 교원 연수, 학부모 연수)\n" +
        " • 전, 평택대학교 학생생활상담소 상담사\n" +
        " 2012년 • 전, 평택대학교 부설 피어선 심리상담원 객원 심리상담사\n" +
        "주요상담분야 : 우울, 불안, 분노, 스트레스, 학업코칭, 대인관계, 사회성 부족, 생애개발상담\n" +
        "연구분야\n" +
        " • 교육과학기술부 범교과 학습 주제 지도자료 연구. 교육과학기술부\n" +
        " • Wee프로젝트 상담사 역량강화 및 연수 방안 연구. 한국교육개발원\n" +
        " • 따돌림(사이버 따돌림) 실태 및 개입전략에 관한 연구. 교육부\n" +
        " • 학교폭력 대응 프로그램(교우관계회복, 자존감 향상) 개발 연구. 교육부 \n" +
        " • 공감 증진 독서치료프로그램이 중학생 자녀의 어머니와 자녀 간 의사소통에 미치는 효과. 독서치료연구. 제 8권 2호\n" +
        " • 가톨릭 봉사자의 초기기억에 나타난 사회적 관심에 관한 연구. 인문사회 21. 제 13권 3";

    const introString = "안녕하세요?\n" +
        "저희 심리상담연구소를 찾아주셔서 감사합니다.\n" +
        "하루 하루가 즐겁고 만족스런 날이 되길 모두 소망합니다.\n" +
        "그렇지만 어떤 날에는 후회로 울적하고, 어떤 날에는 예상하지 못했던 일로 온 세상을 얻는 기쁨을 갖기도 합니다. \n" +
        "개인심리학의 창시자 아들러는 심리치료의 목표를 개인이 삶의 의무를 다하고, 현재의 삶을 그대로 받아들이며, 더 나은 대인관계를 갖도록 도와주고, 다른 사람들과 함께한다는 소속감을 키워나가도록 돕는 작업이라고 합니다. \n" +
        "저희 연구소에서는 Wellness의 최상의 상태를 유지하는 삶을 살아가도록 생활양식을 재설정하고, 행동으로 옮길 수 있는 힘을 드리려고 합니다. \n" +
        "갈등과 괴로움, 혼란스러운 마음이 들 때 당신의 이야기에 귀를 기울이고, 마음의 소리를 듣겠습니다.\n" +
        "감사합니다.";
    return <div>
        <Header />
        <div className={style.main__box}>
            <div>
                <img src={picture} className={style.picture} alt="logo"/>
                <div className={style.profile}>
                    {profile}
                </div>
            </div>
            <ul>
                <p className={style.content}>이순희 대표</p>
                <div className={style.list}>{introString}</div>
                <div className={style.abbreviation}>단비심리상담연구소 대표 이순희</div>
            </ul>
        </div>
    </div>
}

export default Adviser;
