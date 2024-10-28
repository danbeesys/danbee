import './Process.css'
import SequentialBlocks from "./SequentialBlocks";
import phonePic from './pic/telephone.png';
import visitPic from './pic/visit.png';
import discussionPic from './pic/discussion.png';
import searchPic from './pic/search.png';
import presentPic from './pic/presentation.png';
import cure from './pic/value.png';
import { Block } from './BlockComponent';

const Process: React.FC = () => {
    const processBlock: Block[] = [];
    processBlock.push({id: 1, thumbnail: phonePic, content: "상담예약\n전화 예약\n온라인 예약"});
    processBlock.push({id: 2, thumbnail: visitPic, content: "연구소 방문\n예약시간 10분전 방문"});
    processBlock.push({id: 3, thumbnail: discussionPic, content: "초기상담\n향후 치료방향\n검사필요여부 결정"});
    processBlock.push({id: 4, thumbnail: searchPic, content: "심리검사\n대상자에 한하여 실시"});
    processBlock.push({id: 5, thumbnail: presentPic, content: "진단평가\n검사해석"});
    processBlock.push({id: 6, thumbnail: cure, content: "치료 프로그램\n진행"});


    /**
     *      <h3>예약 방법</h3>
            <p>전화문의 : 031-714-1714</p>
            <p>카카오톡 : </p>
            <p>인스타 : #</p>
     */
    return (
        <section id="process" className='process-body'>
            <h2>상담절차</h2>
            <SequentialBlocks blocks={processBlock}></SequentialBlocks>
            <h3>상담 운영시간</h3>
            <tbody className='process_table'>
                <tr>
                    <th>{"평일"}</th>
                    <td>{"오전 10시 ~ 오후 7시 \n (평일 2일은 야간 상담 진행. 오후 9시까지)"}</td>
                </tr>
                <tr>
                    <th>{"토요일"}</th>
                    <td>{"오전 10시 ~ 오후 5시"}</td>
                </tr>
                <tr>
                    <th>{"공휴일/일요일"}</th>
                    <td>{"휴무"}</td>
                </tr>
            </tbody>
            <h3>예약방법</h3>
            <p>전 화 : <a href='tel:PHONE'>031-714-1714</a> / <a href='tel:PHONE'>010-2493-1714</a></p>
            <p>카카오톡 : <a href='https://open.kakao.com/o/syUYt8Qg' target='_blank'>단비 심리상담</a></p>
            <p>인 스 타 : <a href='https://www.instagram.com/isunhyi2282' target='_blank'>isunhyi2282</a></p>
        </section>
)
};

export default Process;