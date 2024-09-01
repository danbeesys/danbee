import './DiagnosisPaperSupplier.css';
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import React, { useState } from "react";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export interface DiagnosisPaperProps {
    questions: string[];
}

const DiagnosisPaperSupplier: React.FC<DiagnosisPaperProps> = ({ questions }) => {
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
        for (const e of scoreMap.values()) {
            total = total + e;
        }
        navigate('/danbee/diagnosis/parent/result', { state: {result: total / scoreMap.size}});
    };

    return <form onSubmit={handleSubmit} className='supplier_body'>
        <FormControl>
            {questions.map((question, index) => (
                <React.Fragment key={index}>
                    <FormLabel id={`question-${index}`} sx={{
                        fontSize: '45px',
                        padding: '10px'
                    }}>{question}</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby={`question-${index}`}
                        name={`question-radio-group-${index}`}
                        defaultValue="top"
                        onChange={handleOnChange}
                    >
                        <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="전혀 그렇지 않다"
                            labelPlacement="bottom"
                        />
                        <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="그렇지 않다"
                            labelPlacement="bottom"
                        />
                        <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label="그렇다"
                            labelPlacement="bottom"
                        />
                        <FormControlLabel
                            value="4"
                            control={<Radio />}
                            label="매우 그렇다"
                            labelPlacement="bottom"
                        />
                    </RadioGroup>
                </React.Fragment>
            ))}
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined" 
                disabled={couldConfirm}>
          결과 확인
        </Button>
        </FormControl>
        </form>;
}

export default DiagnosisPaperSupplier;