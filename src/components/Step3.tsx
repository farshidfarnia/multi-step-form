import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../context/FormContext';
import Header from './Header';
import Footer from './Footer';
import { SideBar } from "./Sidebar";
import { AddOnRow } from './AddOnRow';
import './styles.css';

const Step3: React.FC = () => {
  const { formData, setFormData } = useFormContext();
  const [activeStep, setActiveStep] = useState(3);
  const [addOns, setAddOns] = useState(formData.step3?.addOns || []);
  const navigate = useNavigate();

  const handleNext = (event: React.FormEvent) => {
    event.preventDefault();
    setFormData({ ...formData, step3: { addOns } });
    setActiveStep(4);
    navigate('/step4');
  };

  const handleBack = () => {
    navigate('/step2');
  };

  const handleAddOnChange = (addOn: string) => {
    setAddOns((prev: any) =>
      prev.includes(addOn) ? prev.filter((a: any) => a !== addOn) : [...prev, addOn]
    );
  };

  return (
    <div className="form-container">
      <SideBar activeStep={activeStep} />
      <div className="form-content">
        <Header title="Pick add-ons" subtitle="Add-ons help enhance your gaming experience." />
        <form onSubmit={handleNext}>
          <div className="add-ons">
            <AddOnRow
              title="Online service"
              description="Access to multiplayer games"
              price="+$1/mo"
              isSelected={addOns.includes('onlineService')}
              onToggle={() => handleAddOnChange('onlineService')}
            />
            <AddOnRow
              title="Larger storage"
              description="Extra 1TB of cloud save"
              price="+$2/mo"
              isSelected={addOns.includes('largerStorage')}
              onToggle={() => handleAddOnChange('largerStorage')}
            />
            <AddOnRow
              title="Customizable profile"
              description="Custom theme on your profile"
              price="+$2/mo"
              isSelected={addOns.includes('customProfile')}
              onToggle={() => handleAddOnChange('customProfile')}
            />
          </div>
          <Footer showBackButton={true} showNextButton={true} onBack={handleBack} />
        </form>
      </div>
    </div>
  );
};

export default Step3;
