import { useState } from "react";
import TherapyContent from "./TherapyContentViewer";
import style from "./Therapy.module.css";


const Therapy:  React.FC = () => {
    const [therapyMode, setTherapyMode] = useState(false);

    const onClickTherapy = () => {
      setTherapyMode(e => !e);
    }
    
    return <div>
        <h3 
        className={style.therapy_cursor_pointer}
        onClick={onClickTherapy}>
          그림책 테라피 목록</h3>
        {therapyMode ? <TherapyContent/> : null}
    </div>
}

export default Therapy;