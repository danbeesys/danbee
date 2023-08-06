import Header from "../header/Header";
import Identity from "./Identity";
import picture from "./pic.png";
import style from "./Adviser.module.css";
import {useState} from "react";
import {click} from "@testing-library/user-event/dist/click";

function Adviser() {
    const introString = "안녕하세요?\n" +
        "저희 심리상담연구소를 찾아주셔서 감사합니다.\n" +
        "하루 하루가 즐겁고 만족스런 날이 되길 모두 소망합니다.\n" +
        "그렇지만 어떤 날에는 후회로 울적하고, 어떤 날에는 예상하지 못했던 일로 온 세상을 얻는 기쁨을 갖기도 합니다. \n" +
        "개인심리학의 창시자 아들러는 심리치료의 목표를 개인이 삶의 의무를 다하고, 현재의 삶을 그대로 받아들이며, 더 나은 대인관계를 갖도록 도와주고, 다른 사람들과 함께한다는 소속감을 키워나가도록 돕는 작업이라고 합니다. \n" +
        "저희 연구소에서는 Wellness의 최상의 상태를 유지하는 삶을 살아가도록 생활양식을 재설정하고, 행동으로 옮길 수 있는 힘을 드리려고 합니다. \n" +
        "갈등과 괴로움, 혼란스러운 마음이 들 때 당신의 이야기에 귀를 기울이고, 마음의 소리를 듣겠습니다.\n" +
        "감사합니다.";

    const [clicked, setClicked] = useState(true);

    const toggle = () => {
        console.log("clicked")
        setClicked(!clicked);
    }

    return <div>
        <Header />
        <div className={style.main__box}>
            <div>
                <img src={picture} className={style.picture} alt="logo"/>
                <div onClick={toggle}>인적사항 (바로보기)</div>
                <div style={{ display: clicked ? "block" : "none" }}>
                    <Identity></Identity>
                </div>
            </div>
            <ul>
                <p className={style.content}>이순희 대표</p>
                <div className={style.list}>{introString}</div>
                <div className={style.abbreviation}>단비심리상담연구소 대표 이순희</div>
            </ul>
        </div>
    </div>
}

export default Adviser;
