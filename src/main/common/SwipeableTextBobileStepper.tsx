import './SwipeableTextBobileStepper.css'
import React from 'react';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import Box from '@mui/material/Box';
import opening1 from "./pic/20240610_111632.jpg";
import opening2 from "./pic/20240610_125329.jpg";
import opening3 from "./pic/20240610_130046.jpg";
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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
    <Box sx={{ maxWidth: 1000, flexGrow: 1, position: 'relative' }} className='swipeable_text'>
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

export default SwipeableTextMobileStepper;