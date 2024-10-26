import './Story.css';
import StoryBoard, { AccordionContent } from './StoryBoard';
import Therapy from './Therapy/Therapy';

const notice: AccordionContent[] = [
  {
    panel: 'panel1',
    title: '애착 관계 형성 부모-자녀 독서 프로그램',
    content: ['시간:90분', '대상: 유치원 자녀와 어머니', '그림책을 유아와 엄마가 함께 읽고 나누는 시간을 가지며, 책의 내용과 관련된 활동을 하고, 신체적 움직임과 마음의 대화를 통해 안정적인 애착관계를 형성할 수 있게 합니다.']
  },
  {
    panel: 'panel2',
    title: '부모긍정훈육 집단상담 프로그램',
    content: ['시간: 90분', '대상: 자녀와 행복한 관계 형성을 원하는 부모', '부모는 초기기억을 통해 자신을 이해하고, 자녀의 생활양식을 파악하여 자녀의 행동을 이해하게 되면서 행복한 부모자녀 관계를 형성하게 됩니다.']
  },
  {
    panel: 'panel3',
    title: "'우리 자녀 함께 키우기' 무료상담 프로그램",
    content: ['날짜: 매월 둘째 주 수요일 오전 11시', '장소: 단비심리상담연구소', '신청: 참가 전에 전화 또는 문자 주세요.', '대상: 내가 아이를 잘 키우고 있는지 걱정되시는 부모님. 자녀와 대화의 어려움을 겪고 계시는 부모님. 자녀 양육에서 좌절감과 실망을 느끼시는 부모님.']
  }
]

const qna: AccordionContent[] = [
  {
    panel: 'panel1',
    title: '아이에게 심리검사가 왜 필요한가요?',
    content: ['뭔가의 답변']
  }
]

const Story: React.FC = () => {    
    return (
    <section id="story" className='story-body'>
        <h2>단비 스토리</h2>
        <Therapy />
        <StoryBoard title='공지사항' contents={notice}/>
        <StoryBoard title='Q & A' contents={qna}/>
    </section>
)
};

export default Story;