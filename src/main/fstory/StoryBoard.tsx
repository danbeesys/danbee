import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export interface AccordionContent {
    panel: string,
    title: string,
    content: string[]
}

interface StoryBoardProp {
    title: string,
    contents: AccordionContent[]
}

const StoryBoard: React.FC<StoryBoardProp> = (props) => {

    return <div><h3>{props.title}</h3>
        {props.contents.map((arr, arrIndex) => (
          <Accordion key={arrIndex}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls= {`${arr.panel}-content`}
              id= {`${arr.panel}panel1-header`}
            >
              <Typography sx={{
                    color: 'success.dark',
                    display: 'inline',
                    fontWeight: 'bold',
                    mx: 0.5,
                    fontSize: 14,
                  }}>{arr.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{
                fontWeight: 'fontWeightLight'
              }}>
                  {arr.content.map((e, index) => <p key={index}>{e}</p>)}
              </Typography>
            </AccordionDetails>
            </Accordion>
        ))}
        </div>
}   

export default StoryBoard;