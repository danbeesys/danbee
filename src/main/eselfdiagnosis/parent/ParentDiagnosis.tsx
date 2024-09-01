import Navigation from "../../common/Navigation";
import DiagnosisPaperSupplier from "./ParentDiagnosisMarker";

const questions: string[] = [
    "question1", "question2"
]

const ParentDiagnosis: React.FC = () => {
    return <div>
        <Navigation />
        <DiagnosisPaperSupplier questions={questions} />
    </div>;
}

export default ParentDiagnosis;