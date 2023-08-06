import Header from "../header/Header"
import ActivityBox from "./ActivityBox";
import active from "./active.png"
import style from "./Counsel.module.css"
import ChangeViewComponent from "../intro/ChangeViewComponent";

function Counsel() {
    return <div>
        <Header />
        <div className={style.boxes}>
            <ChangeViewComponent></ChangeViewComponent>
        </div>
    </div>
}

export default Counsel;