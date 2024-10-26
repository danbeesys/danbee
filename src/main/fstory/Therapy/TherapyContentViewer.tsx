import { Box } from '@mui/material';
import TherapyCard, { TherapyContent } from './TherapyCard';
import img1 from "./pic/20240827_그래도 엄마는 너를 사랑한단다.jpg";
import img2 from "./pic/20240827_내 이름은 자가주.jpg";
import img3 from "./pic/20240827_내 친구 월터.jpg";
import img4 from "./pic/20240827_눈물바다.jpg";
import img5 from "./pic/20240827_아빠, 달님 따주세요.jpg";
import img6 from "./pic/20240827_좋아 좋아, 싫어 싫어.jpg";

  
const therapyContent: TherapyContent[] = [
  {
    imagePath: img1,
    title: "그래도 엄마는 너를 사랑한단다",
    date: "2024-10-27",
    description: ['설명']
  },
  {
    imagePath: img2,
    title: "내 이름은 자가주",
    date: "2024-10-27",
    description: ['설명']
  },
  {
    imagePath: img3,
    title: "내 친구 월터",
    date: "2024-10-27",
    description: ['설명']
  },
  {
    imagePath: img4,
    title: "눈물 바다",
    date: "2024-10-27",
    description: ['설명']
  },
  {
    imagePath: img5,
    title: "아빠, 달님 따주세요",
    date: "2024-10-27",
    description: ['설명']
  },
  {
    imagePath: img6,
    title: "괜찮아, 그래도 맛있어!",
    date: "2024-10-27",
    description: ['설명']
  },
]


const TherapyContentViewer: React.FC = () => {
    return <Box sx={{ 
      display: 'flex',
      flexWrap: 'wrap',
      gap: 1,
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    }}>
      {therapyContent.map((e, index) => (
        <TherapyCard key={index} title={e.title} date={e.date} imagePath={e.imagePath} description={e.description}/>))}
    </Box>
}

export default TherapyContentViewer;