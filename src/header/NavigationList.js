import style from "./NavigationList.module.css"
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function NavigationList({flex, toggle}) {
    let clazz = "";
    let elem = style.elem;
    if (flex) {
        elem += ` ${style.elem__flex}`;
        clazz += style.vertical;
        if (toggle) {
            clazz += ` ${style.show}`;
        } else {
            clazz += ` ${style.hide}`;
        }
    } else {
        elem += ` ${style.elem__vertical}`;
        clazz += style.horizon;
    }

    return <div className={clazz}>
        <Link to={"/danbee"} className={elem}>소개</Link>
        <Link to={"/adviser"} className={elem}>상담사 약력</Link>
        <Link to={"/process"} className={elem}>상담/절차</Link>
        <Link to={"/psychometry"} className={elem}>심리검사</Link>
        <Link to={"/story"} className={elem}>단비 스토리</Link>
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