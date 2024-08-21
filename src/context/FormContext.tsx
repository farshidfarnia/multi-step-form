import React, { createContext, useState, ReactNode, useContext } from "react";
import { Billing, Plan } from "../components/Step2";

interface Step1Data {
  name: string;
  email: string;
  phone: string;
}

interface Step2Data {
  plan: Plan;
  billing: Billing;
}

interface FormData {
  step1?: Step1Data;
  step2?: Step2Data;
  step3?: any;
}

interface FormContextProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

export const FormProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<FormData>({});

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
