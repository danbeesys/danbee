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
    const lastContent = "전혀 아니다    아니다  그렇다 매우 그렇다";
    return <form onSubmit={handleSubmit} className='supplier_body'>
        <FormControl>
            <table>
            <tr>
              <td>No</td><td>문항</td><td className={style.table_hole_style}>
                <span>전혀 아니다</span><span>아니다</span><span>그렇다</span><span>매우 그렇다</span>
              </td>
            </tr>
            {questions.map((question, index) => (
                <tr>
                <React.Fragment key={index}>
                    <td>{index+1}</td>
                    <td>
                    <FormLabel 
                    id={`question-${index}`} 
                    focused={false}
                    sx={{
                        fontSize: '1.2rem',
                        paddingTop: '0',
                        paddingBottom: '10px',
                    }}>{question}</FormLabel>
                    </td>
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
                        <td>
                        <FormControlLabel
                            value="0"
                            control={<Radio />}
                            label=""
                            labelPlacement="bottom"
                            sx={{
                                alignItems: 'top'
                            }}
                        />
                        </td>
                        <td>
                        <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label=""
                            labelPlacement="bottom"
                            sx={{
                            alignItems: 'top'
                            }}
                        />
                        </td>
                        <td>
                        <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label=""
                            labelPlacement="bottom"
                            sx={{
                            alignItems: 'top'
                            }}
                        />
                        </td>
                        <td>
                        <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label=""
                            labelPlacement="bottom"
                            sx={{
                              alignItems: 'top'
                            }}
                        />
                        </td>
                    </RadioGroup>
                </React.Fragment>
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