import style from "./Identity.module.css"

function Identity() {
    const table1_1 = "상담 경력"
    const table1_2 = "11년"
    const table2_1 = "학력";
    const table2_2 = "충남대학교 문과대학 국어국문학과 학사";
    const table3_2 = " 평택대학교 상담대학원 특수상담학과 독서치료 전공 석사";
    const table4_2 = " 평택대학교 일반대학원 상담학과 박사";
    const table5_1 = "상담이론";
    const table5_2 = "개인심리학, 정신분석, 대상관계";
    const table6_1 = "자격증";
    const table6_2 = "국제아들러심리상담사(NASAP)";
    const table7_2 = "한국상담학회 전문상담사 2급";
    const table8_2 = " 한국독서치료학회 독서심리전문상담사";
    const table9_2 = " 아들러 긍정훈육 부모교육 1급";
    const table10_2 = " 한국시치료학회 1급";
    const table11_2 = " 정신보건 상담사 2급";
    const table12_1 = "대표이력";
    const table13_1 = "현재";
    const table13_2 = " • 현, 단비심리상담연구소 대표";
    const table14_2 = " • 현, 법무부 서울동부 준빕지원센터 보호관찰 위원";
    const table15_2 = " • 현, 대건청소년상담소";
    const table16_2 = " • 전, 구리 인창도서관 집단 독서치료";
    const table17_2 = " • 전, 하남 덕풍 중학교 집단 독서치료";
    const table18_2 = " • 전, 용인 송전 초등학교 집단 독서치료";
    const table19_2 = " • 전, 수원시 청소년 상담복지센터 집단지도자";
    const table20_2 = " • 전, 살레시오 청소년 센터 집단 독서치료";
    const table21_2 = " • 전, 양주 은봉 초등학교 집단 독서치료";
    const table22_2 = " • 전, 0000부대 군역량강화 독서치료";
    const table23_2 = " • 전, 21사단 군역량강화 집단상담";
    const table24_2 = " • 전, 0000부대 또래상담자 교육 ";
    const table25_2 = " • 전, 수도방위사령부 군역량강화 집단상담";
    const table26_2 = " • 전, 유한대학교 객원 상담사";
    const table27_2 = " • 전, 유아와 엄마를 위한 집단 독서치료";
    const table28_2 = " • 전, 교육부 학교폭력예방 프로그램 어울림 강사\n" +
                "   (학생 교육, 충남 ·경기 교원 연수, 학부모 연수)";
    const table29_2 = " • 전, 평택대학교 학생생활상담소 상담사";
    const table30_1 = " 2012년";
    const table30_2 = " • 전, 평택대학교 부설 피어선 심리상담원 객원 심리상담사";
    const table31_1 = "주요상담분야";
    const table31_2 = "우울, 불안, 분노, 스트레스, 학업코칭, 대인관계, 사회성 부족, 생애개발상담";
    const table32_1 = "연구분야"
    const table33_1 = " • 교육과학기술부 범교과 학습 주제 지도자료 연구. 교육과학기술부";
    const table34_1 = " • Wee프로젝트 상담사 역량강화 및 연수 방안 연구. 한국교육개발원";
    const table35_1 = " • 따돌림(사이버 따돌림) 실태 및 개입전략에 관한 연구. 교육부";
    const table36_1 = " • 학교폭력 대응 프로그램(교우관계회복, 자존감 향상) 개발 연구. 교육부 ";
    const table37_1 = " • 공감 증진 독서치료프로그램이 중학생 자녀의 어머니와 자녀 간 의사소통에 미치는 효과. 독서치료연구. 제 8권 2호";
    const table38_1 = " • 가톨릭 봉사자의 초기기억에 나타난 사회적 관심에 관한 연구. 인문사회 21. 제 13권 3";

    return <table className={style.table__css}>
        <caption>인적사항</caption>
        <tbody>
            <tr>
                <th>{table1_1}</th>
                <td>{table1_2}</td>
            </tr>
            <tr>
                <th rowSpan="3">{table2_1}</th>
                <td>{table2_2}</td>
            </tr>
            <tr>
                <td>{table3_2}</td>
            </tr>
            <tr>
                <td>{table4_2}</td>
            </tr>
            <tr>
                <th>{table5_1}</th>
                <td>{table5_2}</td>
            </tr>
            <tr>
                <th rowSpan="6">{table6_1}</th>
                <td>{table6_2}</td>
            </tr>
            <tr>
                <td>{table7_2}</td>
            </tr>
            <tr>
                <td>{table8_2}</td>
            </tr>
            <tr>
                <td>{table9_2}</td>
            </tr>
            <tr>
                <td>{table10_2}</td>
            </tr>
            <tr>
                <td>{table11_2}</td>
            </tr>
            <tr>
                <th colSpan="2">{table12_1}</th>
            </tr>
            <tr>
                <th rowSpan="17">{table13_1}</th>
                <td>{table13_2}</td>
            </tr>
            <tr>
                <td>{table14_2}</td>
            </tr>
            <tr>
                <td>{table15_2}</td>
            </tr>
            <tr>
                <td>{table16_2}</td>
            </tr>
            <tr>
                <td>{table17_2}</td>
            </tr>
            <tr>
                <td>{table18_2}</td>
            </tr>
            <tr>
                <td>{table19_2}</td>
            </tr>
            <tr>
                <td>{table20_2}</td>
            </tr>
            <tr>
                <td>{table21_2}</td>
            </tr>
            <tr>
                <td>{table22_2}</td>
            </tr>
            <tr>
                <td>{table23_2}</td>
            </tr>
            <tr>
                <td>{table24_2}</td>
            </tr>
            <tr>
                <td>{table25_2}</td>
            </tr>
            <tr>
                <td>{table26_2}</td>
            </tr>
            <tr>
                <td>{table27_2}</td>
            </tr>
            <tr>
                <td>{table28_2}</td>
            </tr>
            <tr>
                <td>{table29_2}</td>
            </tr>
            <tr>
                <th>{table30_1}</th>
                <td>{table30_2}</td>
            </tr>
            <tr>
                <th>{table31_1}</th>
                <td>{table31_2}</td>
            </tr>
            <tr>
                <th colSpan="2">{table32_1}</th>
            </tr>
            <tr>
                <td colSpan="2">{table33_1}</td>
            </tr>
            <tr>
                <td colSpan="2">{table34_1}</td>
            </tr>
            <tr>
                <td colSpan="2">{table35_1}</td>
            </tr>
            <tr>
                <td colSpan="2">{table36_1}</td>
            </tr>
            <tr>
                <td colSpan="2">{table37_1}</td>
            </tr>
            <tr>
                <td colSpan="2">{table38_1}</td>
            </tr>
        </tbody>
    </table>
}

export default Identity;