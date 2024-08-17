import React, { useEffect, useState } from 'react';
import './App.css';
import Banner from './welcompage/Banner';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import NotFound from './main/common/NotFound';
import Swiper from './main/common/Swiper';
import Main from './main/MainView';
import SelfDiagnosis from './main/eselfdiagnosis/SelfDiagnosis';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path ="/danbee" element={<Banner />}></Route>
        <Route path ="/danbee/main" element={<Main />}></Route>
        <Route path ="/danbee/diagnosis" element={<SelfDiagnosis />}></Route>
        <Route path ="*" element={<NotFound />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

const LocationLogger: React.FC = () => {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);

    const timeoutId = setTimeout(() => {
      setShowPopup(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [location]);

  return (
    <>
      {showPopup && (
        <>
          <div className={`popup-overlay ${showPopup ? 'show' : ''}`}></div>
          <div className={`popup-container ${showPopup ? 'show' : ''}`}>
            <Swiper />
          </div>
        </>
      )}
    </>
  );
};

export default App;