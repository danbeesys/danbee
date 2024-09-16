import { useLocation } from "react-router-dom";
import Navigation from "../../common/Navigation";

const SmartPhoneDiagnosisResult: React.FC = () => {
    const location = useLocation();
    return <div className="diagnosis_result_body">
        <Navigation />
        <div>{location.state.result}</div>
    </div>;
}

export default SmartPhoneDiagnosisResult;