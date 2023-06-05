import React from 'react';
import Navbar from './components/Navbar/navbar';
import TopNav from './components/TopNav/topNav';
import './App.css';
import MobileOtp from './components/MainContent/mobileOtpPage';
import PanNAadhar from './components/MainContent/pan&aadhar';
import PersonalInfo from './components/MainContent/personalInfo';
import ProfessionalInfo from './components/MainContent/professionalInfo';
import UploadDoc from './components/MainContent/uploadDocuments';
import MainButtons from './components/MainButtons/mainButtons';
import { Stepper, StepLabel, Step } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [step, setStep] = useState(0);
  const data = useSelector((state) => {
    return state.users.key;
  })
  useEffect(()=>{
    setStep(data);
  }, [data]);

  const showStep = (step) => {
    switch(step){
      case 1:
        return <MobileOtp/>
      case 2:
        return <PanNAadhar/>
      case 3:
        return <PersonalInfo/>
      case 4:
        return <ProfessionalInfo/>
      case 5:
        return <UploadDoc/>
    }
  }
  return (
    <div>
      <TopNav/>
      <div className='main'>
        <Navbar/>
        <div>
          {/*<MobileOtp/>*/}
          {/*<PanNAadhar/>*/}
          {/*<PersonalInfo/>*/}
          {/*<ProfessionalInfo/>*/}
          {/*<UploadDoc/>*/}
          {showStep(step+1)}
          <MainButtons/>
        </div>
      </div>
    </div>
  );
}

export default App;
