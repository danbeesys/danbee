import { Box } from '@mui/material';
import TherapyCard, { TherapyContent } from '../TherapyCard';
import img1 from "./pic/20240827_그래도 엄마는 너를 사랑한단다.jpg";
import img5 from "./pic/20240827_아빠, 달님 따주세요.jpg";

const therapyContent: TherapyContent[] = [
    {
      imagePath: img1,
      title: "그래도 엄마는 너를 사랑한단다",
      author: "이언 포크너 글·그림/ 서애경 옮김/ 베틀북",
      description: [' 올리비아는 할 줄 아는 게 너무 너무 많은 아기 돼지에요.',
        '맘에 들 때까지 옷을 골라 입고, 바닷가에서 모래성 쌓기를 좋아하고, 미술관에서 본 그림을 흉내내어 그려보기도 합니다.',
        '지쳐 쓰러질 때까지 열심히 노는 아기 돼지를 엄마 돼지는 사랑스런 눈으로 바라봅니다.',
        '“너는 엄마를 정말 지치게 하는구나. 그래도 엄마는 너를 사랑한단다.”',
        '검정과 흰색, 빨강의 색채만으로 화면을 채우고 있어서 아기돼지의 지치지 않는 열정을 강렬한 색만으로도 느낄 수 있어요.',
        '자기를 표현하는데 어려움을 느끼는 아이에게 자유롭게 행동하도록 유도하는데 좋은 도서에요. ',
        '아이와 ‘아기돼지처럼 되어보는 날’을 정해서 하루를 보내보는 것도 좋아요.']
    },
    {
      imagePath: img5,
      title: "아빠, 달님 따주세요",
      author: "에릭 칼 글·그림/ 한국몬테소리",
      description: [' 진한 파랑색이 환상의 공간에 머물러 있는 것 같은 느낌을 갖게 합니다.',
        '긴 사다리를 놓고 달을 따기 위해 올라가는 아빠가 어떻게 생각되는지 이야기를 해볼 수 있어요.',
        '아이가 힘들게 했었던 일은 무엇이었는지, 아빠와 함께 해보고 싶은 것은 무엇인지 아빠와 정서적인 교감을 나누기에 알맞은 도서에요.',
        '아빠와 함께 사다리를 만들어 벽에 붙이고, 사다리 위에 달님을 그려 붙이는 활동도 아이들이 즐거워합니다.',
        '아빠와 혼자 마주 대하는 것을 불편해하는 친구와 읽으며 불편한 감정을 줄여나가는 작업을 하기에 좋은 도서에요.']
    },
  ]
  
const AttachmentContent: React.FC = () => {
    return <Box sx={{ 
        display: 'block',
      }}>
        {therapyContent.map((e, index) => (
          <TherapyCard key={index} title={e.title} author={e.author} imagePath={e.imagePath} description={e.description}/>))}
      </Box>
}

export default AttachmentContent;