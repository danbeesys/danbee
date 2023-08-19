import style from "./Identity.module.css"

function IdentityTable() {
    return <table className={style.table__css}>
        <caption>인적사항</caption>
        <tbody>
            <tr>
                <th>{"상담 경력"}</th>
                <td>{"11년"}</td>
            </tr>
            <tr>
                <th rowSpan="3">{"학력"}</th>
                <td>{"충남대학교 문과대학 국어국문학과 학사"}</td>
            </tr>
            <tr>
                <td>{" 평택대학교 상담대학원 특수상담학과 독서치료 전공 석사"}</td>
            </tr>
            <tr>
                <td>{" 평택대학교 일반대학원 상담학과 박사"}</td>
            </tr>
            <tr>
                <th>{"상담이론"}</th>
                <td>{"개인심리학, 정신분석, 대상관계"}</td>
            </tr>
            <tr>
                <th rowSpan="6">{"자격증"}</th>
                <td>{"국제아들러심리상담사(NASAP)"}</td>
            </tr>
            <tr>
                <td>{"한국상담학회 전문상담사 2급"}</td>
            </tr>
            <tr>
                <td>{" 한국독서치료학회 독서심리전문상담사"}</td>
            </tr>
            <tr>
                <td>{" 아들러 긍정훈육 부모교육 1급"}</td>
            </tr>
            <tr>
                <td>{" 한국시치료학회 1급"}</td>
            </tr>
            <tr>
                <td>{" 정신보건 상담사 2급"}</td>
            </tr>
            <tr>
                <th colSpan="2">{"대표이력"}</th>
            </tr>
            <tr>
                <th rowSpan="17">{"현재"}</th>
                <td>{" • 현, 단비심리상담연구소 대표"}</td>
            </tr>
            <tr>
                <td>{" • 현, 법무부 서울동부 준빕지원센터 보호관찰 위원"}</td>
            </tr>
            <tr>
                <td>{" • 현, 대건청소년상담소"}</td>
            </tr>
            <tr>
                <td>{" • 전, 구리 인창도서관 집단 독서치료"}</td>
            </tr>
            <tr>
                <td>{" • 전, 하남 덕풍 중학교 집단 독서치료"}</td>
            </tr>
            <tr>
                <td>{" • 전, 용인 송전 초등학교 집단 독서치료"}</td>
            </tr>
            <tr>
                <td>{" • 전, 수원시 청소년 상담복지센터 집단지도자"}</td>
            </tr>
            <tr>
                <td>{" • 전, 살레시오 청소년 센터 집단 독서치료"}</td>
            </tr>
            <tr>
                <td>{" • 전, 양주 은봉 초등학교 집단 독서치료"}</td>
            </tr>
            <tr>
                <td>{" • 전, 0000부대 군역량강화 독서치료"}</td>
            </tr>
            <tr>
                <td>{" • 전, 21사단 군역량강화 집단상담"}</td>
            </tr>
            <tr>
                <td>{" • 전, 0000부대 또래상담자 교육 "}</td>
            </tr>
            <tr>
                <td>{" • 전, 수도방위사령부 군역량강화 집단상담"}</td>
            </tr>
            <tr>
                <td>{" • 전, 유한대학교 객원 상담사"}</td>
            </tr>
            <tr>
                <td>{" • 전, 유아와 엄마를 위한 집단 독서치료"}</td>
            </tr>
            <tr>
                <td>{" • 전, 교육부 학교폭력예방 프로그램 어울림 강사\n" +
                    "   (학생 교육, 충남 ·경기 교원 연수, 학부모 연수)"}</td>
            </tr>
            <tr>
                <td>{" • 전, 평택대학교 학생생활상담소 상담사"}</td>
            </tr>
            <tr>
                <th>{" 2012년"}</th>
                <td>{" • 전, 평택대학교 부설 피어선 심리상담원 객원 심리상담사"}</td>
            </tr>
            <tr>
                <th>{"주요상담분야"}</th>
                <td>{"우울, 불안, 분노, 스트레스, 학업코칭, 대인관계, 사회성 부족, 생애개발상담"}</td>
            </tr>
            <tr>
                <th colSpan="2">{"연구분야"}</th>
            </tr>
            <tr>
                <td colSpan="2">{" • 교육과학기술부 범교과 학습 주제 지도자료 연구. 교육과학기술부"}</td>
            </tr>
            <tr>
                <td colSpan="2">{" • Wee프로젝트 상담사 역량강화 및 연수 방안 연구. 한국교육개발원"}</td>
            </tr>
            <tr>
                <td colSpan="2">{" • 따돌림(사이버 따돌림) 실태 및 개입전략에 관한 연구. 교육부"}</td>
            </tr>
            <tr>
                <td colSpan="2">{" • 학교폭력 대응 프로그램(교우관계회복, 자존감 향상) 개발 연구. 교육부 "}</td>
            </tr>
            <tr>
                <td colSpan="2">{" • 공감 증진 독서치료프로그램이 중학생 자녀의 어머니와 자녀 간 의사소통에 미치는 효과. 독서치료연구. 제 8권 2호"}</td>
            </tr>
            <tr>
                <td colSpan="2">{" • 가톨릭 봉사자의 초기기억에 나타난 사회적 관심에 관한 연구. 인문사회 21. 제 13권 3"}</td>
            </tr>
        </tbody>
    </table>
}

export default IdentityTable;