import './FixedRightNav.css';
import { Fab } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MessageIcon from '@mui/icons-material/Message';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import React from 'react';
import { isMobile } from 'react-device-detect';

const FixedRightNav: React.FC = () => {
    const widthSize = isMobile ? 40 : 150;
    const iconMr = isMobile ? 0 : 1;

    return (
      <nav className="fix_nav">
          <Fab className='elem' variant="extended" size="small" color="primary" sx={{width:widthSize, mt:1, mb:1}} href='tel:PHONE'>
              <LocalPhoneIcon sx={{ mr: iconMr }} />
              {isMobile ? "" : "031-714-1714"}
          </Fab>
          <Fab className='elem' variant="extended" size="small" color="primary" sx={{width:widthSize, mt:1, mb:1}} href='https://open.kakao.com/o/syUYt8Qg' target='_blank'>
              <MessageIcon sx={{ mr: iconMr }} />
              {isMobile ? "" : "카카오톡"}
          </Fab>
          <Fab className='elem' variant="extended" size="small" color="primary" sx={{width:widthSize, mt:1, mb:1}} href='https://blog.naver.com/sephy6371' target='_blank'>
              <AssignmentIndIcon sx={{ mr: iconMr }} />
              {isMobile ? "" : "블로그"}
          </Fab>
          <Fab className='elem' variant="extended" size="small" color="primary" sx={{width:widthSize, mt:1, mb:1}}>
              <ContentPasteIcon sx={{ mr: iconMr }} />
              {isMobile ? "" : "상담 신청"}
          </Fab>
      </nav>
    );
};

export default FixedRightNav;