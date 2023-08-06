import Header from "../header/Header";
import Payment from "./Payment";


function Request() {
    return (
        <div>
            <Header />
            <table>
                <thead>
                <tr>
                    <th colSpan="2">상담신청서</th>
                </tr>
                <tr>
                    <th>이름</th>
                    <td></td>
                </tr>
                <tr>
                    <th>연락처/E-mail</th>
                    <td></td>
                </tr>
                <tr>
                    <th>상담하고 싶은 내용</th>
                    <td>□ □ □ □ □ □ □ □</td>
                </tr>
                <tr>
                    <th>상담 가능 날짜와 시간</th>
                    <td></td>
                </tr>
                <tr>
                    <th>문의 사항</th>
                    <td></td>
                </tr>
                </thead>
            </table>
            <div>
                (필수) 개인정보수집 및 활용동의서       ◎ 동의합니다.
            </div>
            <div>
                신청하기
            </div>
            <p></p>
            <p></p>
            <Payment></Payment>
            <div>
                신청하기
            </div>
        </div>);
}

export default Request;