import React, { useState } from 'react';
import Profile from "./Profile";
import IdentityTable from './IdentityTable';
import CloseIcon from '@mui/icons-material/Close';
import './Introduce.css';

const Introduce: React.FC = () => {
    const [showProfile, setShowProfile] = useState(false);
    return (
        <section id="intro" className='intro_body'>
        <Profile onClick={() => setShowProfile(true)} />
        {showProfile && (
            <div className="popup-overlay" onClick={() => setShowProfile(false)}>
            <div className="popup" onClick={e => e.stopPropagation()}>
              <CloseIcon 
              onClick={() => setShowProfile(false)}
              sx={{
                position: 'absolute',
                right: 60,
                cursor: 'pointer'
              }}/>
              <h2>이순희</h2>
              <h3>심리전문가</h3>
              <IdentityTable/>
            </div>
          </div>
        )}
        </section>
    )
}

export default Introduce;