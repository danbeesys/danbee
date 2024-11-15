import { useLocation } from "react-router-dom";
import Navigation from "../../common/Navigation";
import workwellimg from "./pic/workwell.webp"
import overUserImg from "./pic/overUser.webp"
import highUserImg from "./pic/highUser.webp"
import "./SmartPhoneDiagnosisResult.css";

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
            picturePath: workwellimg, 
            description: "알맞게 사용하고 계시네요. 자기조절을 잘 하고 있어요."
        },
        {
            type: "overUser", 
            picturePath: overUserImg, 
            description: "휴대폰 사용이 좀 많으시네요. 업무가 아니라면 줄여 보세요. "
        },
        {
            type: "highUser", 
            picturePath: highUserImg, 
            description: "휴대폰을 너무 많이 사용하시네요. 전문가의 도움을 받아보세요."
        },
    ];

    let resultIndex = 0;
    if (location.state.result <= 39) {
        resultIndex = 0;
    } else if (location.state.result <= 43) {
        resultIndex = 1;
    } else {
        resultIndex = 2;
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