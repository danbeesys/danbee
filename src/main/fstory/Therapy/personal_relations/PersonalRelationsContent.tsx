import { Box } from '@mui/material';
import TherapyCard, { TherapyContent } from '../TherapyCard';
import img1 from "./pic/20240827_좋아 좋아, 싫어 싫어.jpg";
import img2 from "./pic/20240827_좋아 좋아, 싫어 싫어.jpg";

const therapyContent: TherapyContent[] = [
    {
      imagePath: img1,
      title: "좋아 좋아! 싫어 싫어!",
      author: " 제프 맥 글·그림/ 글맛 옮김/ 키즈 엠",
      description: ['토끼는 두더지에게 과일도 주고, 사과도 주고, 케잌도 주지만 과일을 줄 때는 비가 오고, 사과를 줄 때는 벌레가 나오고, 케잌을 줄 때는 벌이 날아와 앉아서 두더지의 마음을 상하게 합니다.',
        '토끼는 그래도 괜찮다고 좋다고, 좋다고 하고 두더지는 싫다고 합니다.',
        '좋은 것과 싫은 것을 어떻게 말하면 상대의 기분이 상하지 않을까 생각해 볼 수 있어요.',
        '일어나는 상황에 따라 토끼와 두더지의 감정이 잘 표현되어 있어서 지금 토끼의 마음은 어떨까, 지금 두더지는 어떤 마음일까 등 감정을 알아가기 좋아요.',
        '표정만으로도 재미와 즐거움을 주는 책이에요']
    },
    {
      imagePath: img2,
      title: "늑대와 아벨",
      author: "세르지오 라일라 글/ 알렉산드라 로베르티 그림/ 김완균 옮김/ 효리원 ",
      description: ['혼자 살아야 할 나이가 된 아벨은 부모님을 떠나 숲에 살게 되었어요.',
        '아벨이 찾아온 숲에는 늑대가 살고 있었어요.',
        '늑대는 침입자인 아벨을 잡아먹을 생각만 하였어요.',
        '그런데 발목을 다친 늑대에게 아벨은 음식을 해주고 치료도 해줍니다.',
        '아벨이 늑대와 친구가 되어가는 과정을 보며 타인과의 관계방식을 생각해 볼 수 있어요.',
        '아이들이 처음 만나는 친구에게 가까워지기 위해 어떻게 말하고 행동하는지 물어봐 주세요.',
        '그리고 아벨이 늑대의 붕대를 풀어줄 때 늑대와 아벨이 말을 한다면 어떤 말을 했을지 상상해 보도록 도와주세요.',
        '타인의 마음이 어떨지 짐작하는 활동에서 공감을 경험할 수 있어요']
    },
  ]

const PersonalRelationsContent: React.FC = () => {
    return <Box sx={{ 
        display: 'block',
      }}>
        {therapyContent.map((e, index) => (
          <TherapyCard key={index} title={e.title} author={e.author} imagePath={e.imagePath} description={e.description}/>))}
      </Box>
}

export default PersonalRelationsContent;