import React from 'react';
import './App.css';
import Banner from './welcompage/Banner';
import { HashRouter, Route, Routes } from 'react-router-dom';
import NotFound from './main/common/NotFound';
import MainView from './main/MainView';
import SelfDiagnosis from './main/eselfdiagnosis/SelfDiagnosis';
import ParentDiagnosis from './main/eselfdiagnosis/parent/ParentDiagnosis';
import ParentDiagnosisResult from './main/eselfdiagnosis/parent/ParentDiagnosisResult';
import SmartPhoneDiagnosis from './main/eselfdiagnosis/smartphone/SmartPhoneDiagnosis';
import SmartPhoneDiagnosisResult from './main/eselfdiagnosis/smartphone/SmartPhoneDiagnosisResult';
import DepressionDiagnosis from './main/eselfdiagnosis/depression/DepressionDiagnosis';
import DepressionDiagnosisResult from './main/eselfdiagnosis/depression/DepressionDiagnosisResult';
import InternetOveruseDiagnosis from './main/eselfdiagnosis/internetOveruse/InternetOveruseDiagnosis';
import InternetOveruseDiagnosisResult from './main/eselfdiagnosis/internetOveruse/InternetOveruseDiagnosisResult';

const App: React.FC = () => {
  return (
    <div className="App">
      <HashRouter>
      <Routes>
        <Route path ="/" element={<Banner />}></Route>
        <Route path ="/main" element={<MainView />}></Route>
        <Route path ="/diagnosis" element={<SelfDiagnosis />}></Route>
        <Route path ="/diagnosis/smartphone" element={<SmartPhoneDiagnosis />}></Route>
        <Route path ="/diagnosis/smartphone/result" element={<SmartPhoneDiagnosisResult />}></Route>
        <Route path ="/diagnosis/depression" element={<DepressionDiagnosis />}></Route>
        <Route path ="/diagnosis/depression/result" element={<DepressionDiagnosisResult />}></Route>
        <Route path ="/diagnosis/internetoveruse" element={<InternetOveruseDiagnosis />}></Route>
        <Route path ="/diagnosis/internetoveruse/result" element={<InternetOveruseDiagnosisResult />}></Route>
        <Route path ="/diagnosis/parent" element={<ParentDiagnosis />}></Route>
        <Route path ="/diagnosis/parent/result" element={<ParentDiagnosisResult />}></Route>
        <Route path ="*" element={<NotFound />}></Route>
      </Routes>
      </HashRouter>
    </div>
  );
};

export default App;