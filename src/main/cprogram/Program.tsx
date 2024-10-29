import './Program.css';
import book from "./pic/book_pic.jpg";
import pictureTherapyImg from "./pic/KakaoTalk_20240627_도서사진.jpg";
import * as React from 'react';

const Program: React.FC = () => {
    return (
    <section id="program">
        <div className='program-body'>
          <div className='program-body-left'>
            <h2>Special 프로그램</h2>
          </div>
          <div className='program-body-right'>
            <div>
              <h3>학업상담 (일반학생·수험생 상담)</h3>
              <p>청소년들에게 학업은 자신의 역할을 제대로 수행하고 있는지를 알려주는 중요한 지표로 생활의 중심입니다. 그래서 시험 불안, 집중력 부족, 성적 저하 및 걱정에 따른 스트레스, 공부방법의 문제, 습관의 미형성 등으로 늘 고민하게 됩니다. 학업상담으로 학업 과정에서 겪는 어려움을 해결해 보세요.</p>
                    <p>• 학업계획수립과 실행에 대한 코칭</p>
                    <p>• 집중력을 높이기 위한 심리 안정화 작업 실시</p>
                    <p>• 불안을 낮추기 위한 내면 강화 프로그램 적용</p>
                    <p>• 학업 동기화를 위한 심상 기법 사용</p>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                  <img style={{
                      width: '100px',
                      height: '100px',
                    }} src={book} />
                  </div>
            </div>
            <div>
              <h3>그림책 테라피</h3>
                <p>그림책은 전 연령이 읽을 수 있으며, 그림과 글로 마음을 이야기하기에 알맞습니다. </p>
                <p>자신의 이야기를 하기 어려워하는 아동, 청소년들의 경우 그림책을 사용하여 상담을 하기도 합니다. </p>
                <p>그림책은 내면에 담긴 이야기를 부담없이 표현하는데 알맞은 도구입니다.</p>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                  <img style={{
                      width: '15vw',
                      height: '15vw',
                    }} src={pictureTherapyImg} />
                  </div>
            </div>
            <div>
              <h3>놀이 치료</h3>
                <p>놀이치료는 아동이 놀이를 하며 무의식으로 갈등을 표현하게 하고, </p>
                <p>스스로 선택한 놀이에서 창조적인 방법으로 문제 해결을 할 수 있게 도와줍니다.</p>
                <p>그리고 치료사와 놀이를 매개로 자유롭게 의사소통을 하고,</p>
                <p>억압된 감정을 해소하며, 감정을 정화합니다. 인형, 게임, 찰흙, 미술재료, 손인형 등의 도구를 사용합니다.</p>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                  <img style={{
                      width: '100px',
                      height: '100px',
                    }} src={book} />
                  </div>
            </div>
          </div>
        </div>
    </section>
)
};

export default Program;