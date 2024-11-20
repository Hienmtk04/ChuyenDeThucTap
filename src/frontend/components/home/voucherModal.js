import React, { useState, useEffect } from 'react';
import '../../../assets/home/vouchermodal.css';

const VoucherModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }, []);

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="voucher-modal-overlay">
        <div className="voucher-modal-content">
          <button className="voucher-close-btn" onClick={closeModal}>✕</button>
          <div className="voucher-details">
            <img src={require('../../assets/images/banner/Merry.png')} alt='voucher'/>
          </div>
        </div>
      </div>
    )
  );
};

export default VoucherModal;
