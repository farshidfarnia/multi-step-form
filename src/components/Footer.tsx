import React from 'react';

interface FooterProps {
  showBackButton: boolean;
  showNextButton: boolean;
  showConfirmButton: boolean;
  onBack?: () => void;
  onNext?: () => void;
  onConfirm?: () => void;
}

const Footer: React.FC<FooterProps> = ({ showBackButton, showNextButton, showConfirmButton, onBack, onNext, onConfirm }) => {
  return (
    <div className="footer">
      {showBackButton && <button type="button" className="back-btn" onClick={onBack}>Go Back</button>}
      {showNextButton && <button type="button" className="next-step-btn" onClick={onNext}>Next Step</button>}
      {showConfirmButton && <button type="button" className="confirm-btn" onClick={onConfirm}>Confirm</button>}
    </div>
  );
}

export default Footer;