import React, {useState, useEffect} from "react";
import image1 from "./opening1.PNG";
import image2 from "./opening2.PNG";
import image3 from "./opening3.PNG";
import style from "./ChangeViewComponent.module.css";
function ChangeViewComponent() {
    const picture = [image1, image2, image3]
    const [imageIndex, setImageIndex] = useState(0);
    const sentence = [
        "개인은 일관적이고, 창조적이며, 변화할 수 있는 존재이다.",
        "개인은 사회 공동체의 일원으로 삶의 과업을 충실히 해낼 수 있다.",
        "산다는 것은 곧 스스로를 발달시키는 것이다.\n " +
        "“중요한 것은 당신에게 주어진 벽돌들이 아니라, 그 벽돌들로 당신이 무엇을 지을 것이냐는 것이다.\n" +
        "    당신은 궁궐을 지을 수도 있고, 헛간을 지을 수도 있다.”"

    ]

    useEffect(() => {
        const intervalId = setInterval(() => {
            setImageIndex(prev => (
                prev === picture.length - 1 ? 0 : prev + 1
            ));
        }, 5000);
        return () => clearInterval(intervalId);
    },[])


    return <div className="slideshow-container">
        <img
            src={picture[imageIndex]}
            className={style.image__box}
        />
        <div className={style.sentence__box}>
            {sentence[imageIndex]}
        </div>
    </div>;
}
export default ChangeViewComponent;