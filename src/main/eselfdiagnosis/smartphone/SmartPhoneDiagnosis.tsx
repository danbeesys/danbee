import Navigation from "../../common/Navigation";
import SmartPhoneDiagnosisMarker from "./SmartPhoneDiagnosisMarker";

const questions = [ "q1" ];

const SmartPhoneDiagnosis: React.FC = () => {
    return <div>
        <Navigation />
        <SmartPhoneDiagnosisMarker
        questions={questions} />
    </div>;
}

export default SmartPhoneDiagnosis;