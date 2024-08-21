import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../context/FormContext";
import Header from "./Header";
import Footer from "./Footer";
import { SideBar } from "./Sidebar";
import PlanCard from "./PlanCard";
import BillingToggle from "./BillingToggle";
import arcadeIcon from "../assets/icons/arcade-icon.png";
import advancedIcon from "../assets/icons/advanced-icon.png";
import proIcon from "../assets/icons/pro-icon.png";
import "./styles.css";

const planOptions = [
  {
    plan: "arcade",
    title: "Arcade",
    price: "$9/mo",
    imgSrc: arcadeIcon,
  },
  {
    plan: "advanced",
    title: "Advanced",
    price: "$12/mo",
    imgSrc: advancedIcon,
  },
  {
    plan: "pro",
    title: "Pro",
    price: "$15/mo",
    imgSrc: proIcon,
  },
] as const;

export type Plan = (typeof planOptions)[number]["plan"];

const billingOptions = ["monthly", "yearly"] as const;

export type Billing = (typeof billingOptions)[number];

const Step2: React.FC = () => {
  const { formData, setFormData } = useFormContext();
  const [plan, setPlan] = useState<Plan>(
    formData.step2?.plan || planOptions[0].plan
  );
  const [billing, setBilling] = useState<Billing>(billingOptions[0]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!plan.trim()) newErrors.plan = "This field is required";
    return newErrors;
  };

  const handleNext = (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setFormData({ ...formData, step2: { plan, billing } });
      navigate("/step3");
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  const handlePlanSelect = (selectedPlan: Plan) => {
    setPlan(selectedPlan);
  };

  return (
    <div className="form-container">
      <SideBar />
      <div className="form-content">
        <Header
          title="Select your plan"
          subtitle="You have the option of monthly or yearly billing."
        />
        <form onSubmit={handleNext}>
          <div className="plans">
            {planOptions.map((planOption) => (
              <PlanCard
                key={planOption.plan}
                plan={planOption.plan}
                selectedPlan={plan}
                handlePlanSelect={handlePlanSelect}
                imgSrc={planOption.imgSrc}
                title={planOption.title}
                price={planOption.price}
              />
            ))}
          </div>
          {errors.plan && <p className="error">{errors.plan}</p>}
          <BillingToggle billing={billing} setBilling={setBilling} />
          <Footer
            showBackButton={true}
            showNextButton={true}
            showConfirmButton={false}
            onBack={handleBack}
          />
        </form>
      </div>
    </div>
  );
};

export default Step2;
