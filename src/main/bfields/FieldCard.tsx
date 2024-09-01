import sample from './pic/abc.jpg';
import './FieldCard.css';
import { useState } from 'react';
import React from 'react';

interface FieldCardProp {
    header: string,
    content: string,
    children?: React.ReactNode,
}

const FieldCard: React.FC<FieldCardProp> = (props:FieldCardProp) => {
    const [showDetail, setShowDetail] = useState(false);
    return <div className='field_card'>
        <img src={sample} className='field_card_pic'>
        </img>
        <h2>{props.header}</h2>
        <h4 onMouseOver={e => setShowDetail(true)}>
            자세히 보기
        </h4>
        {showDetail ? (
                <p onMouseLeave={() => setShowDetail(false)}>
                    {props.content.split('\\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))}
                </p>
            ) : null}
    </div>;
}

export default FieldCard;