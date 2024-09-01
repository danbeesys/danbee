import './FixedRightNav.css';
import { Fab } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MessageIcon from '@mui/icons-material/Message';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import React from 'react';

const FixedRightNav: React.FC = () => {
  return (
    <nav className="fix_nav">
        <Fab variant="extended" size="small" color="primary" sx={{width:150, mt:1, mb:1}} href='tel:PHONE'>
            <LocalPhoneIcon sx={{ mr: 1 }} />
            031-714-1714
        </Fab>
        <Fab variant="extended" size="small" color="primary" sx={{width:150, mt:1, mb:1}}>
            <MessageIcon sx={{ mr: 1 }} />
            abcdefg
        </Fab>
        <Fab variant="extended" size="small" color="primary" sx={{width:150, height:50, mt:1, mb:1}}>
            <AssignmentIndIcon sx={{ mr: 1 }} />
            개인정보 활용 동의서
        </Fab>
        <Fab variant="extended" size="small" color="primary" sx={{width:150, mt:1, mb:1}}>
            <ContentPasteIcon sx={{ mr: 1 }} />
            상담 신청서
        </Fab>
    </nav>
  );
};

export default FixedRightNav;