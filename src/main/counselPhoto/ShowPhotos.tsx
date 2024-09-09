import './ShowPhotos.css';
import ImageIntroduce from "../ainrto_pic/ImageIntroduce";

const ShowPhotos: React.FC = () => {
    return <div className="image_introduce">
        <div className="image_introduce_left">
            <ImageIntroduce />
        </div>
        <h2 className="image_introduce_right">
            상담소 모습
        </h2>
    </div>
}

export default ShowPhotos;