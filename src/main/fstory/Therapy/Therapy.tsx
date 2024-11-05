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
                  }}>부모와 자녀 사랑 키우기에 도움이 되는 도서</Typography>
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
                  }}>아이의 자존감을 키워주는 도서</Typography>
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
                  }}>타인과 좋은 관계 형성을 돕는 도서</Typography>
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