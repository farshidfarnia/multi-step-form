// src/components/Step2.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../context/FormContext';
import Header from './Header';
import Footer from './Footer';
import CircleButton from './CircleButton';
import CircleButtonText from './CircleButtonText';
import './styles.css';

const Step2: React.FC = () => {
  const { formData, setFormData } = useFormContext();
  const [plan, setPlan] = useState(formData.step2?.plan || '');
  const [billing, setBilling] = useState('monthly');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [activeStep, setActiveStep] = useState(2);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!plan.trim()) newErrors.plan = 'This field is required';
    return newErrors;
  };

  const handleNext = (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setFormData({ ...formData, step2: { plan, billing } });
      setActiveStep(3);
      navigate('/step3');
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  const handlePlanSelect = (selectedPlan: string) => {
    setPlan(selectedPlan);
  };

  return (
    <div className="form-container">
      <div className="sidebar">
        <ul>
          <li className={activeStep === 1 ? 'active' : ''}>
            <CircleButton number={1} isActive={activeStep === 1} />
            <CircleButtonText text="YOUR INFO" subtext="STEP 1" />
          </li>
          <li className={activeStep === 2 ? 'active' : ''}>
            <CircleButton number={2} isActive={activeStep === 2} />
            <CircleButtonText text="SELECT PLAN" subtext="STEP 2" />
          </li>
          <li className={activeStep === 3 ? 'active' : ''}>
            <CircleButton number={3} isActive={activeStep === 3} />
            <CircleButtonText text="ADD-ONS" subtext="STEP 3" />
          </li>
          <li className={activeStep === 4 ? 'active' : ''}>
            <CircleButton number={4} isActive={activeStep === 4} />
            <CircleButtonText text="SUMMARY" subtext="STEP 4" />
          </li>
        </ul>
      </div>
      <div className="form-content">
        <Header title="Select your plan" subtitle="You have the option of monthly or yearly billing." />
        <form onSubmit={handleNext}>
          <div className="plans">
            <div className={`card ${plan === 'arcade' ? 'selected' : ''}`} onClick={() => handlePlanSelect('arcade')}>
              <img src="/assets/icons/arcade-icon.png" alt="Arcade" />
              <h3>Arcade</h3>
              <p>$9/mo</p>
            </div>
            <div className={`card ${plan === 'advanced' ? 'selected' : ''}`} onClick={() => handlePlanSelect('advanced')}>
              <img src="/path/to/advanced-icon.png" alt="Advanced" />
              <h3>Advanced</h3>
              <p>$12/mo</p>
            </div>
            <div className={`card ${plan === 'pro' ? 'selected' : ''}`} onClick={() => handlePlanSelect('pro')}>
              <img src="/path/to/pro-icon.png" alt="Pro" />
              <h3>Pro</h3>
              <p>$15/mo</p>
            </div>
          </div>
          {errors.plan && <p className="error">{errors.plan}</p>}
          <div className="billing-toggle">
            <label>
              <input
                type="radio"
                value="monthly"
                checked={billing === 'monthly'}
                onChange={() => setBilling('monthly')}
              />
              Monthly
            </label>
            <label>
              <input
                type="radio"
                value="yearly"
                checked={billing === 'yearly'}
                onChange={() => setBilling('yearly')}
              />
              Yearly
            </label>
          </div>
          <div className="footer-buttons">
            <button type="button" className="back-btn" onClick={handleBack}>Go Back</button>
            <button type="submit" className="next-step-btn">Next Step</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step2;