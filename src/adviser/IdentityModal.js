import React from 'react';
import style from './IdentityModal.module.css';
import IdentityTable from "./IdentityTable";

function IdentityModal({setModalClose}) {
    return (
        <div className={style.Modal}>
            <IdentityTable/>
            <button className={style.Button} onClick={setModalClose}>닫기</button>
        </div>
    );
};

export default IdentityModal;