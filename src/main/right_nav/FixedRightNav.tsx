import './FixedRightNav.css';
import { Fab } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MessageIcon from '@mui/icons-material/Message';
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
    </nav>
  );
};

export default FixedRightNav;