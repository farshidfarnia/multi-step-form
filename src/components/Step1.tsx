import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../context/FormContext";
import Header from "./Header";
import Footer from "./Footer";
import "./styles.css";
import { SideBar } from "./Sidebar";
import { Input } from "./Input";

const Step1: React.FC = () => {
  const { formData, setFormData } = useFormContext();
  const [name, setName] = useState(formData.step1?.name || "");
  const [email, setEmail] = useState(formData.step1?.email || "");
  const [phone, setPhone] = useState(formData.step1?.phone || "");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = 'This  field is required';
    if (!email.trim()) newErrors.email = 'This field is required';
    if (!phone.trim()) newErrors.phone = 'This field is required';
    return newErrors;
  };

  const handleNext = (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setFormData({ ...formData, step1: { name, email, phone } });
      navigate("/step2");
    }
  };

  return (
    <div className="form-container">
      <SideBar />
      <div className="form-content">
        <Header
          title="Personal info"
          subtitle="Please provide your name, email address, and phone number."
        />
        <form onSubmit={handleNext}>
          <Input
            label="Name"
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Stephen King"
            error={errors.name}
          />

          <Input
            label="Email Address"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. stephenking@lorem.com"
            error={errors.email}
          />

          <Input
            label="Phone Number"
            value={phone}
            type="tel"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. +1 234 567 890"
            error={errors.phone}
          />
            <Footer className="step1-footer" showBackButton={false} showNextButton={true} />
        </form>
      </div>
    </div>
  );
};

export default Step1;