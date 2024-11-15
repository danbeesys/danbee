import Navigation from "../../common/Navigation";
import DepressionDiagnosisMarker from "./DepressionDiagnosisMarker";

const questions = [
    "평소에는 아무렇지도 않던 이들이 괴롭고 귀찮게 느껴졌다.",
    "먹고 싶지 않고 식욕이 없었다.",
    "어느 누가 도와준다 하더라도, 나의 울적한 기분을 떨쳐 버릴 수 없을 것 같다.",
    "무슨 일을 하던 정신을 집중하기가 힘들었다. ",
    "비교적 잘 지냈다.",
    "상당히 우울했다.",
    "모든 일들이 힘들게 느껴졌다.",
    "앞 일이 암담하게 느껴졌다. ",
    "지금까지의 내 인생이 실패작이라는 생각이 들었다. ",
    "적어도 보통 사람들만큼의 능력은 있었다고 생각한다.",
    "잠을 설쳤다(잠을 잘 이루지 못했다).",
    "두려움을 느꼈다.",
    "평소에 비해 말수가 적었다.",
    "세상에 홀로 있는 듯한 외로움을 느꼈다.",
    "큰 불만없이 생활했다. ",
    "사람들이 나에게 차갑게 대하는 것 같았다.",
    "갑자기 울음이 나왔다.",
    "마음이 슬펐다.",
    "사람들이 나를 싫어하는 것 같았다.",
    "도무지 뭘 해나갈 엄두가 나지 않았다."
];

const DepressionDiagnosis: React.FC = () => {
    return <div>
        <Navigation />
        <DepressionDiagnosisMarker
        questions={questions} />
    </div>;
}

export default DepressionDiagnosis;