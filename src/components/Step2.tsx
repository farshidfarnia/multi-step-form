import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../context/FormContext';
import Header from './Header';
import Footer from './Footer';
import CircleButton from './CircleButton';
import CircleButtonText from './CircleButtonText';
import PlanCard from './PlanCard';
import BillingToggle from './BillingToggle';
import arcadeIcon from '../assets/icons/arcade-icon.png';
import advancedIcon from '../assets/icons/advanced-icon.png';
import proIcon from '../assets/icons/pro-icon.png';
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
            <PlanCard
              plan="arcade"
              selectedPlan={plan}
              handlePlanSelect={handlePlanSelect}
              imgSrc={arcadeIcon}
              title="Arcade"
              price="$9/mo"
            />
            <PlanCard
              plan="advanced"
              selectedPlan={plan}
              handlePlanSelect={handlePlanSelect}
              imgSrc={advancedIcon}
              title="Advanced"
              price="$12/mo"
            />
            <PlanCard
              plan="pro"
              selectedPlan={plan}
              handlePlanSelect={handlePlanSelect}
              imgSrc={proIcon}
              title="Pro"
              price="$15/mo"
            />
          </div>
          {errors.plan && <p className="error">{errors.plan}</p>}
          <BillingToggle billing={billing} setBilling={setBilling} />
          <Footer showBackButton onBack={handleBack} />
        </form>
      </div>
    </div>
  );
};

export default Step2;