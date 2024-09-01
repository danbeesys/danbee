import './SelfDiagnosis.css';
import Footer from "../common/Footer";
import Navigation from "../common/Navigation";
import BoxSlider from '../common/BoxSlider';
import activity from "../pic/20240610_125241.jpg";
import DiagnosisExplanation, { DiagnosisExplanationContent } from './DiagnosisExplanation';

const personal: DiagnosisExplanationContent[] = [
    { image: activity, header: "스마트폰 과다 사용 자가 진단", link: "" },
    { image: activity, header: "부모양육태도 검사", link: "/danbee/diagnosis/parent" },
  ];

const SelfDiagnosis: React.FC = () => {
    return (
        <div>
        <div className='diagnosis-body'>
            <Navigation />
            <div>
                <h2>자가진단</h2>
                <DiagnosisExplanation arrays={personal}/>
            </div>
            
        </div>
        <Footer/>
        </div>
)
};

export default SelfDiagnosis;