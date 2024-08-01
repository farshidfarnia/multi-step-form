import React from 'react';

interface FooterProps {
  showBackButton: boolean;
  onBack?: () => void;
}

const Footer: React.FC<FooterProps> = ({ showBackButton, onBack }) => {
  return (
    <div className="footer">
      {showBackButton && <button type="button" className="back-btn" onClick={onBack}>Go Back</button>}
      <button type="submit" className="next-step-btn">Next Step</button>
    </div>
  );
}

export default Footer;
