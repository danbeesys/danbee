import './Fields.css';
import Navigation from "../common/Navigation";
import ImageExplanation from "./ImageExplanation";
import type {ImageExplanationContent} from "./ImageExplanation";

import sangdamsil from "../pic/20240610_111632.jpg"
import sangdamsil2 from "../pic/20240610_상담실 1.jpg"
import activity from "../pic/20240610_125241.jpg";
import Footer from "../common/Footer";

const personal: ImageExplanationContent[] = [
    { image: sangdamsil, header: "아동, 청소년", body: "성장과정에서 마주하게 되는 우울, 불안, 스트레스, 낮은 자존감 등 심리 정서적 어려움의 원인을 찾아내고 건강하게 성장할 수 있도록 돕습니다" },
    { image: sangdamsil2, header: "성인", body: "일상에서 경험하는 대인관계의 어려움, 가족간의 갈등과 어려움, 미해결과제의 해결, 미래 설계 등 현재의 심리적 어려움을 해결하는 고리를 찾을 수 있게 도와드립니다" },
  ];

  const group: ImageExplanationContent[] = [
    { image: activity, header: "사진 예시1", body: "청소년, 청년, 성인, 노인들을 대상으로 발달단계에 따른 프로그램을 실시합니다" },
    { image: activity, header: "사진 예시2", body: "행복한 부모가 되기 위한 아들러 이론 기반의 '긍정훈육 프로그램'을 진행합니다" },
  ];

const Fields: React.FC = () => {
    return (
      <section id="fields" className='fields-body'>
            <h2>개인 상담</h2>
            <p>개인이 일상에서 겪고 있는 심리적인 어려움을 이야기하고 해결하여, 안정되고 편안한 대인관계를 형성하고 사회생활을 영위할 수 있게 합니다</p>
            <ImageExplanation arrays={personal}/>
            <h2>집단 상담</h2>
            <p>심리적인 문제가 심각하지 않은 사람들이 집단을 형성하여 전문적인 상담사와 집단원들의 신뢰와 허용의 분위기 속에서 이해와 수용, 지지를 받는 작업을 통해 개인의 태도와 행동을 변화시키고 자신의 잠재능력을 성장시키는 활동입니다</p>
            <ImageExplanation arrays={group}/>
            <h2>심리검사</h2>
            <p>- 성격검사 10만 (HTP + SCT + 해석상담 50분) </p>
            <p>- 정서 및 정신건강 검사 20만 (MMPI-2 또는 MMPI-A + TCI + 해석상담 80분) </p>
            <p>- 기질 및 성격검사 10만 (TCI + SCT + 해석상담 50분)</p>
            <p>- 대인관계 검사 12만 (TAT + HTP + 해석상담 60분) </p>
            <p>- 나를 이해하는 검사 20만 (MMPI-2 + TCI + SCT + 해석상담 80분)</p>
    </section>
)
};

export default Fields;