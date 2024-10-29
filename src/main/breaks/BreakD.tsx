import './Break.css';
import img1 from './pic/headache.webp';
import img2 from './pic/meditation.webp';

const BreakD: React.FC = () => {
    return <div className='break_font'>
            <div className='break_img'>
                <img src={img1}/>
            </div>
            <p>내 안에서 둔탁하고 막힌 소리가 날 때,</p>
            <p>경박하고 시끄러운 소리가 날 때,</p>
            <p>이때가 마음의 조율이 필요할 때입니다</p>
            <div className='break_img'>
                <img src={img2}/>
            </div>
    </div>;
}

export default BreakD;