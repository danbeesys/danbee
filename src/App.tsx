import React, { useEffect, useState } from 'react';
import './App.css';
import Banner from './welcompage/Banner';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import NotFound from './main/common/NotFound';
import Swiper from './main/common/Swiper';
import MainView from './main/MainView';
import SelfDiagnosis from './main/eselfdiagnosis/SelfDiagnosis';
import ParentDiagnosis from './main/eselfdiagnosis/parent/ParentDiagnosis';
import ParentDiagnosisResult from './main/eselfdiagnosis/parent/ParentDiagnosisResult';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path ="/danbee" element={<Banner />}></Route>
        <Route path ="/danbee/main" element={<MainView />}></Route>
        <Route path ="/danbee/diagnosis" element={<SelfDiagnosis />}></Route>
        <Route path ="/danbee/diagnosis/parent" element={<ParentDiagnosis />}></Route>
        <Route path ="/danbee/diagnosis/parent/result" element={<ParentDiagnosisResult />}></Route>
        <Route path ="*" element={<NotFound />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;