import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import style from './InternetOveruseDiagnosisMarker.module.css';

export interface InternetOveruseDiagnosisProps {
    questions: string[];
}

const InternetOveruseDiagnosisMarker: React.FC<InternetOveruseDiagnosisProps> = ({ questions }) => {
    const [scoreMap, setScoreMap] = useState(new Map<string, number>());
    const [couldConfirm, setCouldConfirm] = useState(true);
    const navigate = useNavigate();

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const answerEvent = (event.target as HTMLInputElement);
        setScoreMap(prevMap => {
            const newMap = new Map(prevMap);
            newMap.set(answerEvent.name, parseInt(answerEvent.value));
            return newMap;
        })
    }
    useEffect(() => {
        setCouldConfirm(scoreMap.size !== questions.length);
    }, [scoreMap.size]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let total1:number = 0;
        let total2:number = 0;
        let total3:number = 0;
        let total4:number = 0;
        let total5:number = 0;
        let total6:number = 0;
        let total7:number = 0;

        for (const [key, values] of scoreMap.entries()) {
            if (key.endsWith("-1") 
             || key.endsWith("-2")
             || key.endsWith("-3")
             || key.endsWith("-4")
             || key.endsWith("-5")
             || key.endsWith("-6")
             || key.endsWith("-7")
             || key.endsWith("-8")
             || key.endsWith("-9")) {
                        total1 = total1 + values;
            } else if (key.endsWith("-10") 
                    || key.endsWith("-11")
                    || key.endsWith("-12")) {
                        total2 = total2 + values;
            } else if (key.endsWith("-13") 
                    || key.endsWith("-14")
                    || key.endsWith("-15")
                    || key.endsWith("-16")
                    || key.endsWith("-17")
                    || key.endsWith("-18")) {
                        total3 = total3 + values;
            } else if (key.endsWith("-19") 
                    || key.endsWith("-20")
                    || key.endsWith("-21")
                    || key.endsWith("-22")
                    || key.endsWith("-23")
                    || key.endsWith("-24")) {
                        total4 = total4 + values;
            } else if (key.endsWith("-25") 
                    || key.endsWith("-26")
                    || key.endsWith("-27")
                    || key.endsWith("-28")
                    || key.endsWith("-29")) {
                        total5 = total5 + values;
            } else if (key.endsWith("-30") 
                    || key.endsWith("-31")
                    || key.endsWith("-32")
                    || key.endsWith("-33")
                    || key.endsWith("-34")
                    || key.endsWith("-35")) {
                        total6 = total6 + values;
            } else if (key.endsWith("-36") 
                    || key.endsWith("-37")
                    || key.endsWith("-38")
                    || key.endsWith("-39")
                    || key.endsWith("-40")) {
                        total7 = total7 + values;
            }
        }

        navigate('/diagnosis/internetoveruse/result', { state: {
            result1: total1,
            result2: total2,
            result3: total3,
            result4: total4,
            result5: total5,
            result6: total6,
            result7: total7,
        }});
    };

    return <form onSubmit={handleSubmit} className='supplier_body'>
        <FormControl>
            <table>
            <tr>
              <td>No</td><td>문항</td>
              <td className={style.table_hole_style}>
                <div className={style.flex_container}>
                    <span>전혀<br/>그렇지<br/>않다</span>
                    <span>때때로<br/>그렇다</span>
                    <span>자주<br/>그렇다</span>
                    <span>항상<br/>그렇다</span>
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
                        <FormControlLabel
                            value="4"
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

export default InternetOveruseDiagnosisMarker;