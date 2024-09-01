import './FixedRightNav.css';
import { Fab } from '@mui/material';
import NavigationIcon from '@mui/icons-material/Navigation';
import React from 'react';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

interface FixedRightNavProps {
  items: NavItem[];
}

const FixedRightNav: React.FC = () => {
  return (
    <nav className="fix_nav">
        <Fab variant="extended" size="small" color="primary">
            <NavigationIcon sx={{ mr: 1 }} />
            Extended
        </Fab>
    </nav>
  );
};

export default FixedRightNav;