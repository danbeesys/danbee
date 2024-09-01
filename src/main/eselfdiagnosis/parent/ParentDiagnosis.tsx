import Navigation from "../../common/Navigation";
import ParentDiagnosisMarker from "./ParentDiagnosisMarker";

const loveQuestions: string[] = [
    "어머니께서는 어린 자녀들이 놀고 있을 때 자녀들이 노는 방식으로 허물없이 함께 놀아주십니까?", "question2"
];

const denyQuestions: string[] = [];

const freeQuestions: string[] = [];

const controlQuestions: string[] = [];

const ParentDiagnosis: React.FC = () => {
    return <div>
        <Navigation />
        <ParentDiagnosisMarker 
        loveQuestions={loveQuestions} 
        denyQuestions={denyQuestions}
        freeQuestions={freeQuestions} 
        controlQuestions={controlQuestions} />
    </div>;
}

export default ParentDiagnosis;