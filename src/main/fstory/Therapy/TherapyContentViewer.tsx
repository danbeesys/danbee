import TherapyCard, { TherapyContent } from './TherapyCard';
import img1 from "./pic/20240827_그래도 엄마는 너를 사랑한단다.jpg";


  
const therapyContent: TherapyContent[] = [
  {
    imagePath: img1,
    title: "그래도 엄마는 너를 사랑한단다",
    date: "2024-10-27",
    description: ['설명']
  }
]


const TherapyContentViewer: React.FC = () => {
    return <div className='therapy_content_viewer'>
      {therapyContent.map((e, index) => (
        <TherapyCard key={index} title={e.title} date={e.date} imagePath={e.imagePath} description={e.description}/>))}
    </div>
}

export default TherapyContentViewer;