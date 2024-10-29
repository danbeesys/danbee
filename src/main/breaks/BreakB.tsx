import './Break.css';
import img1 from './pic/wave_tree.jpg';
import img2 from './pic/wonthuri.jpg';

const BreakB: React.FC = () => {
    return <div className='break_font'>
            <div className='break_img'>
                <img src={img1}/>
            </div>
            <p>언젠가 산길을 걷다가 바람을 본 적이 있습니다.</p>
            <p>하지만 바람 그 자체로서 그를 본 것은 아니었습니다. </p>
            <p>길섶에 우뚝 선 나뭇잎이 살랑대거나</p>
            <p>목이 긴 원추리가 흔들거리는 것을 통해</p>
            <p>비로소 바람을 보았던 것이지요. 땀으로 젖은 내 살갗에 바람이 닿았을 때</p>
            <p>이윽고 그가 바람이 되었듯이</p>
            <p>사람 또한 다르지 않습니다. 나 이외의 또 다른 사람이 있어야만</p>
            <p>그제야 나의 모습이 보이는 것이겠지요. </p>
            <div className="break_from">- 이지누의 『우연히 만나 새로 사귄 풍경』 중에서 - </div>
            <div className='break_img'>
                <img src={img2}/>
            </div>
    </div>;
}

export default BreakB;