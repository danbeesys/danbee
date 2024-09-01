import Navigation from "../../common/Navigation";
import ParentDiagnosisMarker from "./ParentDiagnosisMarker";

const questions: string[] = [
    "question1", "question2"
]

const ParentDiagnosis: React.FC = () => {
    return <div>
        <Navigation />
        <ParentDiagnosisMarker questions={questions} />
    </div>;
}

export default ParentDiagnosis;