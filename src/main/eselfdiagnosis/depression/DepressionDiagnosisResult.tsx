import { useLocation } from "react-router-dom";
import Navigation from "../../common/Navigation";
import normalImg from "./pic/normal.webp"
import dangerImg from "./pic/danger.webp"
import "../DiagnosisResult.css";

interface Result {
    type: string,
    picturePath: string,
    description: string,
}

const SmartPhoneDiagnosisResult: React.FC = () => {
    const location = useLocation();

    const results: Result[] = [
        {
            type: "normal", 
            picturePath: normalImg, 
            description: "건강한 인생을 살고 계시는군요!"
        },
        {
            type: "danger", 
            picturePath: dangerImg, 
            description: "전문가와의 상담을 진행해보는 것이 좋겠습니다."
        },
    ];

    let resultIndex = 0;
    if (location.state.result < 21) {
        resultIndex = 0;
    } else {
        resultIndex = 1;
    }

    return <div className="smart_phone_diagnosis_result_body">
        <Navigation />
        <div className="smart_phone_result_box" >
            <img src={results[resultIndex].picturePath} />
            <div>{results[resultIndex].description}</div>
        </div>
    </div>;
}

export default SmartPhoneDiagnosisResult;