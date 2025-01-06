import React from "react";
import '../../assets/css/Modals/LandingModal.css'

function LandingModal({ onClose }) {
  return (
    <div className="modal landing-modal show d-block text-dark" tabIndex="-1" role="dialog">
      {/* Added "show" and "d-block" classes for visibility */}
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">We offer</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose} // Ensure the close button triggers the `onClose` function
            ></button>
          </div>
          <div className="modal-body">
            <p>Get your first time offer by signing in with us for only INR 7,999 starting for digital marketing. Hurry up ! Limited seats available only</p>
            
          </div>
          <div className="modal-footer">
            <button 
              onClick={onClose}
              type="button"
              className="btn btn-secondary "
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingModal;
