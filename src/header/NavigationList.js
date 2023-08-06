import style from "./NavigationList.module.css"
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function NavigationList({flex, toggle}) {
    let clazz = "";
    if (flex) {
        clazz += style.vertical;
        if (toggle) {
            clazz += ` ${style.show}`;
        } else {
            clazz += ` ${style.hide}`;
        }
    } else {
        clazz += style.horizon;
    }

    return <div className={clazz}>
        <Link to={"/danbee"} className={style.elem}>소개</Link>
        <Link to={"/adviser"} className={style.elem}>상담사 약력</Link>
        <Link to={"/process"} className={style.elem}>상담/절차</Link>
        <Link to={"/psychometry"} className={style.elem}>심리검사</Link>
    </div>
}

NavigationList.propTypes = {
    flex: PropTypes.bool.isRequired,
    toggle: PropTypes.bool
}

NavigationList.defaultProps = {
    toggle: true
}

export default NavigationList;