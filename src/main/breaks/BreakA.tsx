import './Break.css';
import img1 from './pic/tree_birth.webp';
import img2 from './pic/shining_tree.webp';

const BreakA: React.FC = () => {
    return <div className='break_font'>
            <div className='break_img'>
                <img src={img1}/>
            </div>
            <p>받아들이고자 마음을 여는 사람은 </p>
            <p>나뭇잎을 펼치고 빛을 향해가는 나무처럼</p>
            <p>생명을 펼치게 됩니다.</p>
            <div className='break_img'>
                <img src={img2}/>
            </div>
    </div>;
}

export default BreakA;