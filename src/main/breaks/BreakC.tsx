import './Break.css';
import img1 from './pic/bare1.webp';
import img2 from './pic/bare2.webp';

const BreakC: React.FC = () => {
    return <div className='break_font'>
            <div className='break_img'>
                <img src={img1}/>
            </div>
            <p>우리가 불행한 것은 가진 것이 적어서가 아니라</p>
            <p>따듯한 가슴을 잃어가기 때문이다. 따뜻한 가슴을 잃지 않으려면</p>
            <p>이웃들과 정을 나누어야 한다.</p>
            <p>행복은 이웃과 함께 누려야 하고,</p>
            <p>불행은 딛고 일어서야 한다. </p>
            <div className="break_from">- 법정의 『홀로 사는 즐거움』 중에서 -</div>
            <div className='break_img'>
                <img src={img2}/>
            </div>
    </div>;
}

export default BreakC;