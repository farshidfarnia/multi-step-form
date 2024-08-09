import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../context/FormContext';
import Header from './Header';
import Footer from './Footer';
import { SideBar } from "./Sidebar";
import './styles.css';

const Step4: React.FC = () => {
  const { formData } = useFormContext();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/step3');
  };

  const handleConfirm = () => {
    console.log('Form submitted', formData);
    navigate('/confirmation'); 
  };

  const { step1, step2, step3 } = formData;

  return (
    <div className="form-container">
      <SideBar activeStep={4} />
      <div className="form-content">
        <Header title="Finishing up" subtitle="Double-check everything looks OK before confirming." />
        <div className="summary">
          <div className="summary-item">
            <h3>Plan: {step2.plan} ({step2.billing})</h3>
            <p>Price: ${step2.plan === 'arcade' ? '9/mo' : step2.plan === 'advanced' ? '12/mo' : '15/mo'}</p>
          </div>
          <div className="summary-item">
            <h3>Add-ons</h3>
            {step3.addOns.map((addOn: string) => (
              <p key={addOn}>{addOn === 'onlineService' ? 'Online service: +$1/mo' : addOn === 'largerStorage' ? 'Larger storage: +$2/mo' : 'Customizable profile: +$2/mo'}</p>
            ))}
          </div>
          <div className="total">
            <h3>Total: ${step3.addOns.length + (step2.plan === 'arcade' ? 9 : step2.plan === 'advanced' ? 12 : 15)}/mo</h3>
          </div>
        </div>
        <Footer showBackButton onBack={handleBack} />
        <button className="confirm-btn" onClick={handleConfirm}>Confirm</button>
      </div>
    </div>
  );
};

export default Step4;
