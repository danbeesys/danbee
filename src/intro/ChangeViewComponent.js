import React, {useState, useEffect} from "react";
import image1 from "./opening1.PNG";
import image2 from "./opening2.PNG";
import image3 from "./opening3.PNG";
import style from "./ChangeViewComponent.module.css";
function ChangeViewComponent() {
    const picture = [image1, image2, image3]
    const [imageIndex, setImageIndex] = useState(0);

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
    </div>;
}
export default ChangeViewComponent;