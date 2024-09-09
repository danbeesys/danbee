import './Story.css';
import Footer from "../common/Footer";
import Navigation from "../common/Navigation";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Story: React.FC = () => {

    // TODO : 공지사항 onclick event 및 h4 하위 팝업
    return (
    <section id="story" className='story-body'>
        <h2>단비 스토리</h2>
        <h3>공지사항</h3>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography sx={{
                      color: 'success.dark',
                      display: 'inline',
                      fontWeight: 'bold',
                      mx: 0.5,
                      fontSize: 14,
                    }}>애착 관계 형성 부모-자녀 독서 프로그램</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{
                  fontWeight: 'fontWeightLight'
                }}>
            <p>시간:90분</p>
            <p>대상: 유치원 자녀와 어머니</p>
            <p>그림책을 유아와 엄마가 함께 읽고 나누는 시간을 가지며, 책의 내용과 관련된 활동을 하고, 신체적 움직임과 마음의 대화를 통해 안정적인 애착관계를 형성할 수 있게 합니다.</p>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography sx={{
                      color: 'success.dark',
                      display: 'inline',
                      fontWeight: 'bold',
                      mx: 0.5,
                      fontSize: 14,
                    }}>부모긍정훈육 집단상담 프로그램</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{
                  fontWeight: 'fontWeightLight'
                }}>
                <p>시간: 90분</p>
                <p>대상: 자녀와 행복한 관계 형성을 원하는 부모</p>
                <p>부모는 초기기억을 통해 자신을 이해하고, 자녀의 생활양식을 파악하여 자녀의 행동을 이해하게 되면서 행복한 부모자녀 관계를 형성하게 됩니다.</p>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography sx={{
                      color: 'success.dark',
                      display: 'inline',
                      fontWeight: 'bold',
                      mx: 0.5,
                      fontSize: 14,
                    }}>'우리 자녀 함께 키우기' 무료상담 프로그램</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{
                  fontWeight: 'fontWeightLight'
                }}>
                <p>날짜: 매월 둘째 주 수요일 오전 11시</p>
                <p>장소: 단비심리상담연구소</p>
                <p>신청: 참가 전에 전화 또는 문자 주세요.</p>
                <p>대상: 내가 아이를 잘 키우고 있는지 걱정되시는 부모님. 자녀와 대화의 어려움을 겪고 계시는 부모님. 자녀 양육에서 좌절감과 실망을 느끼시는 부모님.</p>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <h3>Q & A</h3>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography sx={{
                      color: 'success.dark',
                      display: 'inline',
                      fontWeight: 'bold',
                      mx: 0.5,
                      fontSize: 14,
                    }}>아이에게 심리검사가 왜 필요한가요?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{
                  fontWeight: 'fontWeightLight'
                }}>
                <p>뭔가의 답변</p>        
                </Typography>
              </AccordionDetails>
            </Accordion>
    </section>
)
};

export default Story;