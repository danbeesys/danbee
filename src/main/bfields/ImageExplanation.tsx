import './ImageExplanation.css';

export interface props {
    arrays: ImageExplanationContent[];
}

export interface ImageExplanationContent {
    image: string;
    header: string;
    body: string;
  }

function ImageExplanation(props: props) { 
    const contents = props.arrays;
    return (
      <div className="image-explanation">
        {contents.map((content, index) => (
          <div key={index} className="image-item">
            <img src={content.image} alt={`Image ${index + 1}`} />
            <div className="explanation">
              <h3>{content.header}</h3>
              <p>{content.body}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  

export default ImageExplanation;