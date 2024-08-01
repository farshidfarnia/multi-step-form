import React from 'react';

interface BillingToggleProps {
  billing: string;
  setBilling: (billing: string) => void;
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