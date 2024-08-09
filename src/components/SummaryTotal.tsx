import React from 'react';

interface SummaryTotalProps {
  totalCost: number;
  billingPeriod: 'monthly' | 'yearly';
}

const SummaryTotal: React.FC<SummaryTotalProps> = ({ totalCost, billingPeriod }) => {
  return (
    <div className="summary-total">
      <h3>Total (per {billingPeriod})</h3>
      <p>${totalCost}/{billingPeriod === 'monthly' ? 'mo' : 'yr'}</p>
    </div>
  );
};

export default SummaryTotal;