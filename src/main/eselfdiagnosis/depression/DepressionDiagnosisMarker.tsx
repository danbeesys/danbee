import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import React, { useState } from "react";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import style from './DepressionDiagnosisMarker.module.css';

export interface DepressionDiagnosisProps {
    questions: string[];
}

const DepressionDiagnosisMarker: React.FC<DepressionDiagnosisProps> = ({ questions }) => {
    const [scoreMap, setScoreMap] = useState(new Map<string, number>());
    const [couldConfirm, setCouldConfirm] = useState(true);
    const navigate = useNavigate();

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const answerEvent = (event.target as HTMLInputElement);
        setScoreMap(scoreMap.set(answerEvent.name, parseInt(answerEvent.value)));
        setCouldConfirm(scoreMap.size !== questions.length);
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let total:number = 0;
        for (const [key, values] of scoreMap.entries()) {
            if (key.endsWith("-4") || key.endsWith("-9") || key.endsWith("-14") ) {
                const specialPoint = Math.abs(3 - values);
                console.log("SP:", specialPoint);
                total = total + specialPoint;
            } else {
                total = total + values;
            }
        }
        navigate('/diagnosis/depression/result', { state: {result: total}});
    };
    return <form onSubmit={handleSubmit} className='supplier_body'>
        <FormControl>
            <table>
            <tr>
              <td>No</td><td>문항</td>
              <td className={style.table_hole_style}>
                <div className={style.flex_container}>
                    <span>극히<br/>드물다</span>
                    <span>가끔<br/>있었다</span>
                    <span>종종<br/>있었다</span>
                    <span>대부분<br/>그렇다</span>
                </div>
                </td>
            </tr>
            {questions.map((question, index) => (
                <tr key={index}>
                <td>{index + 1}</td>
                <td>
                    <FormLabel 
                        id={`question-${index}`} 
                        focused={false}
                        sx={{
                            fontSize: '1.2rem',
                            paddingTop: '0',
                            paddingBottom: '10px',
                        }}
                    >
                        {question}
                    </FormLabel>
                </td>
                <td colSpan={4}>
                    <RadioGroup
                        row
                        aria-labelledby={`question-${index}`}
                        name={`question-radio-group-${index}`}
                        defaultValue="top"
                        onChange={handleOnChange}
                        sx={{
                            alignSelf: 'center',
                        }}
                    >
                        <FormControlLabel
                            value="0"
                            control={<Radio />}
                            label=""
                            labelPlacement="bottom"
                            sx={{
                                alignItems: 'top'
                            }}
                        />
                        <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label=""
                            labelPlacement="bottom"
                            sx={{
                                alignItems: 'top'
                            }}
                        />
                        <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label=""
                            labelPlacement="bottom"
                            sx={{
                                alignItems: 'top'
                            }}
                        />
                        <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label=""
                            labelPlacement="bottom"
                            sx={{
                                alignItems: 'top'
                            }}
                        />
                    </RadioGroup>
                </td>
            </tr>            
            ))}
        </table>
        <Button sx={{ mt: 1, mr: 1, marginBottom: '30px' }} type="submit" variant="outlined" 
                disabled={couldConfirm}>
          결과 확인
        </Button>
        </FormControl>
        </form>;
}

export default DepressionDiagnosisMarker;