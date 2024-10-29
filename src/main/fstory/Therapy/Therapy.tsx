import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Typography from "@mui/material/Typography";
import { AccordionDetails } from "@mui/material";
import AttachmentContent from "./attachment/AttachmentContent";
import SelfEsteemContent from "./self_esteem/SelfEsteemContent";
import PersonalRelationsContent from "./personal_relations/PersonalRelationsContent";


const Therapy:  React.FC = () => {
    return <div><h3>그림책 테라피 목록</h3>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls= {`attachment-content`}
            >
              <Typography sx={{
                    color: 'success.dark',
                    display: 'inline',
                    fontWeight: 'bold',
                    mx: 0.5,
                    fontSize: 14,
                  }}>애착</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{
                fontWeight: 'fontWeightLight'
              }}>
                  <AttachmentContent />
              </Typography>
            </AccordionDetails>
            </Accordion>
            <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls= {`self-esteem-content`}
            >
              <Typography sx={{
                    color: 'success.dark',
                    display: 'inline',
                    fontWeight: 'bold',
                    mx: 0.5,
                    fontSize: 14,
                  }}>자존감 향상</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{
                fontWeight: 'fontWeightLight'
              }}>
                  <SelfEsteemContent />
              </Typography>
            </AccordionDetails>
            </Accordion>
            <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls= {`personal-relations-content`}
            >
              <Typography sx={{
                    color: 'success.dark',
                    display: 'inline',
                    fontWeight: 'bold',
                    mx: 0.5,
                    fontSize: 14,
                  }}>대인관계</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{
                fontWeight: 'fontWeightLight'
              }}>
                  <PersonalRelationsContent />
              </Typography>
            </AccordionDetails>
            </Accordion>
        </div>;
}

export default Therapy;