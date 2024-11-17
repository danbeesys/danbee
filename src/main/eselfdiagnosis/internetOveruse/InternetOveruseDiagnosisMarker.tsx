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

interface QuestionGroup {
  start: number;
  end: number;
}

const QUESTION_GROUPS: Record<number, QuestionGroup> = {
  1: { start: 1, end: 9 },
  2: { start: 10, end: 12 },
  3: { start: 13, end: 18 },
  4: { start: 19, end: 24 },
  5: { start: 25, end: 29 },
  6: { start: 30, end: 35 },
  7: { start: 36, end: 40 }
};

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

    const calculateGroupScore = (groupNum: number, scores: Map<string, number>): number => {
        const group = QUESTION_GROUPS[groupNum];
        let total = 0;
        
        for (let i = group.start; i <= group.end; i++) {
            const score = scores.get(`question-radio-group-${i-1}`);
            if (score) total += score;
        }
        
        return total;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const results = Object.keys(QUESTION_GROUPS).reduce((acc, groupNum) => ({
            ...acc,
            [`result${groupNum}`]: calculateGroupScore(Number(groupNum), scoreMap)
        }), {});

        navigate('/diagnosis/internetoveruse/result', { state: results });
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