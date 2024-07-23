import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
// import Step3 from './components/Step3';
// import Summary from './components/Summary';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        {/* <Route path="/step3" element={<Step3 />} />
        <Route path="/summary" element={<Summary />} /> */}
      </Routes>
    </div>
  );
}

export default App;