import { Link } from 'react-router-dom';
import './DiagnosisExplanation.css';

export interface props {
    arrays: DiagnosisExplanationContent[];
}

export interface DiagnosisExplanationContent {
    image: string;
    header: string;
    link: string;
  }

function DiagnosisExplanation(props: props) { 
    const contents = props.arrays;
    return (
      <div className="diagnosis-explanations">
        {contents.map((content, index) => (
          <div key={index} className="diagnosis-item">
            <Link to={content.link}>
            <img src={content.image} alt={`Image ${index + 1}`} />
            </Link>
            <div className="diagnosis-explanation">
              <Link className='diagnosis-explanation-link' to={content.link}><h3>{content.header}</h3></Link>
            </div>
          </div>
        ))}
      </div>
    );
  };
  

export default DiagnosisExplanation;