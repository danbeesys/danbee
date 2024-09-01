import './Program.css';
import Footer from "../common/Footer";
import Navigation from "../common/Navigation";
import book from "./book_pic.jpg";

const Program: React.FC = () => {
    return (
    <section id="program">
        <div className='program-body'>
            <h2>Special 프로그램</h2>
            <h3>학업상담 (일반학생·수험생 상담)</h3>
            <p>학업계획수립과 실행에 대한 코칭</p>
            <p>집중력을 높이기 위한 심리 안정화 작업 실시</p>
            <p>불안을 낮추기 위한 내면 강화 프로그램 적용</p>
            <p>학업 동기화를 위한 심상 기법 사용</p>
            <h3>그림책 테라피</h3>
            <p>그림책은 전 연령이 읽을 수 있으며, 그림과 글로 마음을 이야기하기에 알맞습니다. 자신의 이야기를 하기 어려워하는 아동, 청소년들의 경우 그림책을 사용하여 상담을 하기도 합니다. 그림책은 내면에 담긴 이야기를 부담없이 표현하는데 알맞은 도구입니다.</p>
            <img src={book}></img>
        </div>
    </section>
)
};

export default Program;