import { useLocation } from "react-router-dom";
import Navigation from "../../common/Navigation";
import normalImg from "./pic/normal.webp";
import dangerImg from "./pic/danger.webp";
import highRiskImg from "./pic/highRisk.webp";
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
            description: "인터넷 사용량이 알맞으시네요. 지금 잘하고 계세요."
        },
        {
            type: "danger", 
            picturePath: dangerImg, 
            description: "자신의 인터넷 사용량이 적합한지 생각해 보세요."
        },
        {
            type: "highRisk", 
            picturePath: highRiskImg, 
            description: "인터넷 사용량이 너무 많습니다. 전문가의 도움을 받으세요."
        },
    ];

    let resultIndex = 0;
    const total = location.state.result1 + location.state.result2 + location.state.result3
                 + location.state.result4 + location.state.result5 + location.state.result6
                  + location.state.result7;
    if (total >= 108 || 
        (location.state.result1 >= 26 && location.state.result4 >= 18 && location.state.result7 >= 17)) {
        resultIndex = 2;
    } else if ((107 >= total && total >= 95) 
        || location.state.result1 >= 23 || location.state.result4 >= 16 || location.state.result7 >= 15) {
        resultIndex = 1;
    } else {
        resultIndex = 0;
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