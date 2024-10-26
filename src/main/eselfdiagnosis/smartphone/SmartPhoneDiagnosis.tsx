import Navigation from "../../common/Navigation";
import SmartPhoneDiagnosisMarker from "./SmartPhoneDiagnosisMarker";

const questions = [
    "스마트폰의 지나친 사용으로 학교성적이나 업무능률이 떨어진다.",
    "스마트폰을 사용할 때 그만해야지 라고 생각은 하면서도 계속한다.",
    "스마트폰이 없어도 불안하지 않다. ",
    "수시로 스마트폰을 사용하다가 지적을 받은 적이 있다.",
    "가족이나 친구들과 함께 있는 것보다 스마트폰을 사용하고 있는 것이 더 즐겁다. ",
    "스마트폰 사용시간 줄이려고 해보았지만 실패한다.",
    "스마트폰을 사용할 수 없게 된다면 견디기 힘들 것이다.",
    "스마트폰을 너무 자주 오래 한다고 가족이나 친구들로부터 불평을 들은 적이 있다. ",
    "스마트폰 사용에 많은 시간을 보내지 않는다. ",
    "스마트폰이 옆에 없으면, 하루종일 일(공부)이 손에 안 잡힌다.",
    "스마트폰을 사용하느라 지금하고 있는 일(공부)에 집중이 안 된 적이 있다. ",
    "스마트폰 사용에 많은 시간을 보내는 것이 습관화 되었다.",
    "스마트폰이 없으면 안절부절 못하고 초조해진다.",
    "스마트폰 사용이 지금하고 있는 일(공부)에 방해가 되지 않는다. ",
];

const SmartPhoneDiagnosis: React.FC = () => {
    return <div>
        <Navigation />
        <SmartPhoneDiagnosisMarker
        questions={questions} />
    </div>;
}

export default SmartPhoneDiagnosis;