import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../context/FormContext";
import Header from "./Header";
import Footer from "./Footer";
import CircleButton from "./CircleButton";
import CircleButtonText from "./CircleButtonText";
import "./styles.css";

const Step1: React.FC = () => {
  const { formData, setFormData } = useFormContext();
  const [name, setName] = useState(formData.step1?.name || "");
  const [email, setEmail] = useState(formData.step1?.email || "");
  const [phone, setPhone] = useState(formData.step1?.phone || "");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [activeStep, setActiveStep] = useState(1);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = "This field is required";
    if (!email.trim()) {
      newErrors.email = "This field is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!phone.trim()) {
      newErrors.phone = "This field is required";
    }
    return newErrors;
  };

  const handleNext = (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setFormData({ ...formData, step1: { name, email, phone } });
      setActiveStep(2);
      navigate('/step2');
    }
  };

  return (
    <div className="form-container">
      <div className="sidebar">
        <ul>
          <li className={activeStep === 1 ? "active" : ""}>
            <CircleButton number={1} isActive={activeStep === 1} />
            <CircleButtonText text="YOUR INFO" subtext="STEP 1" />
          </li>
          <li className={activeStep === 2 ? "active" : ""}>
            <CircleButton number={2} isActive={activeStep === 2} />
            <CircleButtonText text="SELECT PLAN" subtext="STEP 2" />
          </li>
          <li className={activeStep === 3 ? "active" : ""}>
            <CircleButton number={3} isActive={activeStep === 3} />
            <CircleButtonText text="ADD-ONS" subtext="STEP 3" />
          </li>
          <li className={activeStep === 4 ? "active" : ""}>
            <CircleButton number={4} isActive={activeStep === 4} />
            <CircleButtonText text="SUMMARY" subtext="STEP 4" />
          </li>
        </ul>
      </div>
      <div className="form-content">
        <Header />
        <form onSubmit={handleNext}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Stephen King"
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. stephenking@lorem.com"
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label>Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. +1 234 567 890"
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
          <Footer />
        </form>
      </div>
    </div>
  );
};

export default Step1;
