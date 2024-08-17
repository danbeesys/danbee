import React, { useState } from 'react';
import Navigation from "../common/Navigation";
import Profile from "./Profile";
import IdentityTable from './IdentityTable';
import MapSection from './MapSection';
import Footer from '../common/Footer';
import './Introduce.css';

const Introduce: React.FC = () => {
    const [showProfile, setShowProfile] = useState(false);
    return (
        <section id="intro">
            <Profile onClick={() => setShowProfile(true)} />
            {showProfile && (
            <div className="popup-overlay" onClick={() => setShowProfile(false)}>
            <div className="popup" onClick={e => e.stopPropagation()}>
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