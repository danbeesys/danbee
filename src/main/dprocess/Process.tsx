import './Process.css'
import Footer from "../common/Footer";
import Navigation from "../common/Navigation";
import SequentialBlocks, { Block } from "./SequentialBlocks";

const Process: React.FC = () => {
    const processBlock: Block[] = [];
    processBlock.push({id: 1, content: "상담예약\n전화 예약\n온라인 예약"});
    processBlock.push({id: 2, content: "연구소 방문\n예약시간 10분전 방문"});
    processBlock.push({id: 3, content: "초기상담\n향후 치료방향\n검사필요여부 결정"});
    processBlock.push({id: 4, content: "심리검사\n대상자에 한하여 실시"});
    processBlock.push({id: 5, content: "진단평가\n검사해석"});
    processBlock.push({id: 6, content: "치료 프로그램\n진행"});

    return (
        <section id="process" className='process-body'>
            <h2>상담절차</h2>
            <SequentialBlocks blocks={processBlock}></SequentialBlocks>
            <h3>상담 운영시간</h3>
            <tbody>
                <tr>
                    <th>{"평일"}</th>
                    <td>{"오전 10시 ~ 오후 7시 \n (평일 2일은 야간 상담 진행. 오후 9시까지)"}</td>
                </tr>
                <tr>
                    <th>{"토요일"}</th>
                    <td>{"오전 10시 ~ 오후 5시"}</td>
                </tr>
                <tr>
                    <th>{"일요일"}</th>
                    <td>{"휴무"}</td>
                </tr>
            </tbody>
            <h3>예약 방법</h3>
            <p>전화문의 : 031-714-1714</p>
            <p>카카오톡 : </p>
            <p>인스타 : #</p>
            <h4>상담 방법</h4>
            <p>대면상담 또는 화상상담(ZOOM) 실시</p>
            <p>상담신청서</p>
        </section>
)
};

export default Process;