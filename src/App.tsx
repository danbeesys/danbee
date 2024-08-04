import React, { useState, useEffect, useRef} from 'react';
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Typography from '@mui/material/Typography';
import './App.css';
import logo from "./logo.png"
import opening1 from "./pic/opening1.PNG";
import opening2 from "./pic/opening2.PNG";
import opening3 from "./pic/opening3.PNG";
import waiting from "./pic/20240610_대기실.jpg";
import logoChain from "./pic/20240710_133854.jpg";
import hall from "./pic/20240710_복도.jpg";
import faceimg from "./face.jpg";
import sangdamsil from "./pic/20240610_111632.jpg"
import sangdamsil2 from "./pic/20240610_상담실 1.jpg"
import activity from "./pic/20240624_182720.jpg";
import map from "./pic/map.PNG";
import IdentityTable from './IdentityTable';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface BlockElem {
  id: number;
  content: string;
}

interface Doctor {
  name: string;
  specialty: string;
  image: string;
  profile: string;
}

interface Subject {
  id: number;
  name: string;
  description: string;
}

interface HeaderProps {
  backgroundImage?: string;
}

interface BoxContent {
  title: string;
  description: string;
}

interface ImageExplanationContent {
  image: string;
  header: string;
  body: string;
}

const swipeableContent = [
  {
    label: "개인은 사회 공동체의 일원으로 삶의 과업을 충실히 해낼 수 있다",
    imgPath: opening1,
  },
  {
    label: "개인은 일관적이고, 창조적이며, 변화할 수 있는 존재이다",
    imgPath: opening2,
  },
  {
    label: "중요한 것은 당신에게 주어진 벽돌들이 아니라, 그 벽돌들로 당신이 무엇을 지을 것이냐는 것이다. \n당신은 궁궐을 지을 수도 있고, 헛간을 지을 수도 있다",
    imgPath: opening3,
  },
];

const SwipeableTextMobileStepper: React.FC = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = swipeableContent.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 1000, flexGrow: 1, position: 'relative' }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {swipeableContent.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 600,
                  display: 'block',
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <p className='box-explaination'>{swipeableContent[activeStep].label}</p>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}
const BoxSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const boxWrapperRef = useRef<HTMLDivElement>(null);
  const boxes: BoxContent[] = [
    { title: "Box 1", description: "Description for Box 1" },
    { title: "Box 2", description: "Description for Box 2" },
    { title: "Box 3", description: "Description for Box 3" },
    { title: "Box 4", description: "Description for Box 4" },
    { title: "Box 5", description: "Description for Box 5" },
    { title: "Box 6", description: "Description for Box 6" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      if (boxWrapperRef.current) {
        boxWrapperRef.current.style.transition = 'transform 0.5s ease';
        boxWrapperRef.current.style.transform = 'translateX(-50%)';
      }

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % boxes.length);
        if (boxWrapperRef.current) {
          boxWrapperRef.current.style.transition = 'none';
          boxWrapperRef.current.style.transform = 'translateX(0)';
        }
        setIsAnimating(false);
      }, 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + boxes.length) % boxes.length);
      
      if (boxWrapperRef.current) {
        boxWrapperRef.current.style.transition = 'none';
        boxWrapperRef.current.style.transform = 'translateX(-50%)';
        
        setTimeout(() => {
          if (boxWrapperRef.current) {
            boxWrapperRef.current.style.transition = 'transform 0.5s ease';
            boxWrapperRef.current.style.transform = 'translateX(0)';
          }
        }, 500);
      }

      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const getVisibleBoxes = () => {
    const prevIndex = (currentIndex - 1 + boxes.length) % boxes.length;
    const nextIndex = (currentIndex + 1) % boxes.length;
    return [boxes[prevIndex], boxes[currentIndex], boxes[nextIndex]];
  };

  return (
    <div className="box-slider-container">
      <button className="arrow left" onClick={prevSlide}><FaArrowLeft /></button>
      <div className="box-slider">
        <div className="box-wrapper" ref={boxWrapperRef}>
          {getVisibleBoxes().map((box, index) => (
            <div key={index} className="box">
              <h3>{box.title}</h3>
              <p>{box.description}</p>
            </div>
          ))}
        </div>
      </div>
      <button className="arrow right" onClick={nextSlide}><FaArrowRight /></button>
    </div>
  );
};

const ImageExplanation: React.FC = () => {
  const contents: ImageExplanationContent[] = [
    { image: sangdamsil, header: "집단 상담실", body: "Body text for image 1" },
    { image: sangdamsil2, header: "개인 상담실", body: "Body text for image 2" },
    { image: activity, header: "사진 예시1", body: "Body text for image 3" },
    { image: activity, header: "사진 예시2", body: "Body text for image 4" },
  ];

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

const ImageSlider: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [waiting, logoChain, hall];
  const explanations = [
    "개인은 사회 공동체의 일원으로 삶의 과업을 충실히 해낼 수 있다",
    "개인은 일관적이고, 창조적이며, 변화할 수 있는 존재이다",
    "중요한 것은 당신에게 주어진 벽돌들이 아니라, 그 벽돌들로 당신이 무엇을 지을 것이냐는 것이다. \n당신은 궁궐을 지을 수도 있고, 헛간을 지을 수도 있다"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-slider">
      <div className='header-content'>
        <p>마음의 어려움, 진심으로 귀기울입니다.</p>
        <h1>단비 심리 상담연구소</h1>
      </div>
      {/* <div className="explanation-container"> */}
        {/* <p>{explanations[currentImageIndex]}</p> */}
      {/* </div> */}
      <div className="image-container">
        <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
      </div>
    </div>
  );
};

const Navigation: React.FC = () => {
  return (
    <nav className="main-nav">
      <img src={logo} alt="logo" className='logo' />
      <ul>
        <li><a href="#home">홈</a></li>
        <li><a href="#doctor">소개</a></li>
        <li><a href="#personalcounsel">상담/절차</a></li>
        <li><a href="#techniques">심리검사</a></li>
        <li><a href="#visit">오시는 길</a></li>
      </ul>
    </nav>
  );
};

const Header: React.FC = () => {
  return (
    <header className="App-header">
      <div className='App-header-left'>
        <p>
          빠른상담문의<br/>
          031.714.1714<br/>
          010.3316.6371
        </p>
      </div>
      <ImageSlider />
    </header>
  );
};

const DoctorProfile: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <section id="doctor" className="doctor-profile">
      <div className="doctor-image-container">
        <img src={faceimg} alt="이미지" />
        <button onClick={onClick}>심리 전문가 소개</button>
      </div>
      <div className="doctor-info">
        <h2>대표 인사말</h2>
        <h3>안녕하세요? 가나다라마바사</h3>
        <p>안녕하세요? <br/>
저희 심리상담연구소를 찾아주셔서 감사합니다.<br/>
하루 하루가 즐겁고 만족스런 날이 되길 모두 소망합니다.<br/>
그렇지만 어떤 날에는 후회로 울적하고, 어떤 날에는 예상하지 못했던 일로 온 세상을 얻는 기쁨을 갖기도 합니다. <br/>
개인심리학의 창시자 아들러는 심리치료의 목표를 개인이 삶의 의무를 다하고, 현재의 삶을 그대로 받아들이며, 더 나은 대인관계를 갖도록 도와주고, 다른 사람들과 함께한다는 소속감을 키워나가도록 돕는 작업이라고 합니다. <br/>
저희 연구소에서는 Wellness의 최상의 상태를 유지하는 삶을 살아가도록 생활양식을 재설정하고, 행동으로 옮길 수 있는 힘을 드리려고 합니다. <br/>
갈등과 괴로움, 혼란스러운 마음이 들 때 당신의 이야기에 귀를 기울이고, 마음의 소리를 듣겠습니다.<br/>
감사합니다.</p>
      </div>
    </section>
  );
};

const MapSection: React.FC = () => {
  return (
    <section id="visit" className="map-section">
      <div className="map">
        <img src={map}/>
      </div>
      <div className="map-info">
        <h2>오시는 길</h2>
        <p>경기 성남시 분당구 서현동 89</p>
        <h2>연락처</h2>
        <p>카카오톡: abcde 전화번호: (031) 714-1714</p>
        <h2>영업시간</h2>
        <p>평일 : 00:00 ~ 00:00</p>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  const [showProfile, setShowProfile] = useState(false);
  return (
    <div className="App">
      <Navigation />
      <Header />

      <main>
        <DoctorProfile onClick={() => setShowProfile(true)} />
        {showProfile && (
          <div className="popup-overlay" onClick={() => setShowProfile(false)}>
            <div className="popup" onClick={e => e.stopPropagation()}>
              <h2>이순희</h2>
              <h3>심리전문가</h3>
              <IdentityTable/>
            </div>
          </div>
        )}

        <section id="SwipeableText">
          <h2>소개 문구</h2>
          <SwipeableTextMobileStepper />
        </section>

        {/* <section id="box-slider">
          <h2>Box Slider Section</h2>
          <BoxSlider />
        </section> */}

        <section id="image-explanation">
          <h2>Image Explanation Section</h2>
          <ImageExplanation />
        </section>

        <MapSection />
      </main>

      <footer>
        <p>© 2024 단비 심리상담 연구소. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;