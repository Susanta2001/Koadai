import React from "react";
import "../../assets/css/Office.css";
import OfficeImg from "../../assets/images/office.jpeg";
function Office() {
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
                <button >Chat Now <i className='bx bxs-message'></i></button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Office;
