import React from "react";
import "../../assets/css/Office.css";
import OfficeImg from "../../assets/images/office.jpeg";
function Office() {
  const whatsappNumber = "918653034994"; // Replace with your WhatsApp number, including the country code (e.g., 91 for India)
  const message = "Hello! I'm interested in learning more about your services."; // Replace with your preset message

  const handleChatNowClick = () => {
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank"); // Opens the WhatsApp chat in a new tab
  };
  return (
    <div>
      <div className="d-flex office-div ">
        <div className="left-div w-50 ">
          <div className="img-div">
            <img src={OfficeImg} alt="" />
          </div>
        </div>
        <div className="right-div w-50 text-light d-flex flex-column justify-content-between ">
            <p id='right-div-text'>Siliguri Office</p>
            <div className="chat-now-btn d-flex justify-content-end pe-4">
                <button onClick={handleChatNowClick}>Chat Now <i className='bx bxs-message'></i></button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Office;
