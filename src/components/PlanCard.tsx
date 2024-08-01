import React from 'react';

interface PlanCardProps {
  plan: string;
  selectedPlan: string;
  handlePlanSelect: (plan: string) => void;
  imgSrc: string;
  title: string;
  price: string;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, selectedPlan, handlePlanSelect, imgSrc, title, price }) => {
  return (
    <div className={`card ${plan === selectedPlan ? 'selected' : ''}`} onClick={() => handlePlanSelect(plan)}>
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
    </div>
  );
}

export default PlanCard;