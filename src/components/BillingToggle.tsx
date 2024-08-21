import React from 'react';
import { Billing } from './Step2';

interface BillingToggleProps {
  billing: Billing;
  setBilling: (billing: Billing) => void;
}

const BillingToggle: React.FC<BillingToggleProps> = ({ billing, setBilling }) => {
  return (
    <div className="billing-toggle">
      <span onClick={() => setBilling('monthly')} className={billing === 'monthly' ? 'active' : ''}>Monthly</span>
      <div className={`toggle-button ${billing}`} onClick={() => setBilling(billing === 'monthly' ? 'yearly' : 'monthly')}>
        <div className={`knob ${billing}`} />
      </div>
      <span onClick={() => setBilling('yearly')} className={billing === 'yearly' ? 'active' : ''}>Yearly</span>
    </div>
  );
}

export default BillingToggle;