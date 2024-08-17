import './DiagnosisExplanation.css';

export interface props {
    arrays: DiagnosisExplanationContent[];
}

export interface DiagnosisExplanationContent {
    image: string;
    header: string;
    body: string;
  }

function ImageExplanation(props: props) { 
    const contents = props.arrays;
    return (
      <div className="diagnosis-explanations">
        {contents.map((content, index) => (
          <div key={index} className="diagnosis-item">
            <img src={content.image} alt={`Image ${index + 1}`} />
            <div className="diagnosis-explanation">
              <h3>{content.header}</h3>
              <p>{content.body}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  

export default ImageExplanation;