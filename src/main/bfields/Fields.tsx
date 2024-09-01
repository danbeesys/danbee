import './Fields.css';
import FieldCard from './FieldCard';
  
const Fields: React.FC = () => {
    return (
      <section id="fields" className='fields-body'>
        <h2>상담 분야</h2>
        <div>
        <FieldCard
          header='개인 상담' 
          content='개인이 일상에서 겪고 있는 심리적인 어려움을 이야기하고 해결하여, 안정되고 편안한 대인관계를 형성하고 사회생활을 영위할 수 있게 합니다'>
        </FieldCard>
        <FieldCard 
          header='집단 상담' 
          content='심리적인 문제가 심각하지 않은 사람들이 집단을 형성하여 전문적인 상담사와 집단원들의 신뢰와 허용의 분위기 속에서 이해와 수용, 지지를 받는 작업을 통해 개인의 태도와 행동을 변화시키고 자신의 잠재능력을 성장시키는 활동입니다'>
        </FieldCard>
        <FieldCard 
          header='심리 검사' 
          content='- 성격검사 10만 (HTP + SCT + 해석상담 50분)
        - 정서 및 정신건강 검사 20만 (MMPI-2 또는 MMPI-A + TCI + 해석상담 80분)
        - 기질 및 성격검사 10만 (TCI + SCT + 해석상담 50분)
        - 대인관계 검사 12만 (TAT + HTP + 해석상담 60분)
        - 나를 이해하는 검사 20만 (MMPI-2 + TCI + SCT + 해석상담 80분)'>
        </FieldCard>
        </div>
    </section>
)
};

export default Fields;