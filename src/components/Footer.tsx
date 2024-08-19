import React from 'react';

interface FooterProps {
  className?: string; 
  showBackButton: boolean;
  showNextButton: boolean;
  showConfirmButton?: boolean;
  onBack?: () => void;
  onSubmit?: () => void;
  onConfirm?: () => void;

}

const Footer: React.FC<FooterProps> = ({ className = '', showBackButton, showNextButton, showConfirmButton, onBack, onSubmit, onConfirm }) => {
  return (
    <div className={`footer ${className}`}>
      {showBackButton && <button type="button" className="back-btn" onClick={onBack}>Go Back</button>}
      {showNextButton && <button type="submit" className="next-step-btn" onClick={onSubmit}>Next Step</button>}
      {showConfirmButton && <button type="button" className="confirm-btn" onClick={onConfirm}>Confirm</button>}
    </div>
  );
}

export default Footer;