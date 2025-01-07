import React from "react";
import "../../assets/css/reviews.css";
import pfOne from '../../assets/images/pf-1.jpg'
import pfTwo from '../../assets/images/pf-2.jpg'
import pfThree from '../../assets/images/pf-3.jpg'
import pfFour from '../../assets/images/pf-4.jpg'

function Testimonial() {
  return (
    <>
      <div className="testimonial-main text-light p-4">
        {/* first div */}
        <div className="testimonial-inner-one my-4">
          <h1 className="text-center" style={{marginBottom:'7rem'}}>Portfolio</h1>
          {/* <p className="text-center">Our Clients Qoute</p> */}
        </div>
        {/* second div */}
        <div className="testimonial-inner-two d-flex justify-content-around my-4">
          <div className="card-div">
            <img src={pfOne} alt="" />
          </div>
          <div className="card-div">
            <img src={pfTwo} alt="" />
          </div>
          <div className="card-div">
            <img src={pfThree} alt="" />
          </div>
          <div className="card-div">
            <img src={pfFour} alt="" />
          </div>
        </div>
      </div>
      {/* third div */}
      {/* <div className="d-flex justify-content-around my-4 text-light">
        <div className="reviews-div">
          <h3>Quote</h3>
          <div className="reviews-div-inner d-flex">
            <img src="" alt="" />
            <div className="reviews-div-inner-text">
              <h5>Title</h5>
              <p>Description</p>
            </div>
          </div>
        </div>
        <div className="reviews-div">
          <h3>Quote</h3>
          <div className="reviews-div-inner d-flex">
            <img src="" alt="" />
            <div className="reviews-div-inner-text">
              <h5>Title</h5>
              <p>Description</p>
            </div>
          </div>
        </div>
        <div className="reviews-div">
          <h3>Quote</h3>
          <div className="reviews-div-inner d-flex">
            <img src="" alt="" />
            <div className="reviews-div-inner-text">
              <h5>Title</h5>
              <p>Description</p>
            </div>
          </div>
        </div>
        <div className="reviews-div">
          <h3>Quote</h3>
          <div className="reviews-div-inner d-flex">
            <img src="" alt="" />
            <div className="reviews-div-inner-text">
              <h5>Title</h5>
              <p>Description</p>
            </div>
          </div>
        </div>
      </div> */}
      {/* fourth div */}
      <div className="testimonial-fourth-div d-flex justify-content-around my-4 text-light">
        <div className="reviews-div-inner-w-one d-flex justify-content-center">
          <div className="reviews-div-q bg-light text-dark d-flex flex-column justify-content-center" style={{ width: "90%" }}>
            {/* <h3>Quote</h3> */}
            <div className="d-flex" style={{gap: '12px'}}>
              {/* <img src="" alt="" /> */}
              <div className="reviews-div-inner-text-one">
                <h5>Yogesh Kharga</h5>
                <p>Thanks for creating a premium website, where all my requirements where met. Thanks for providing me valuable suggestions and guidance. Special shoutout to Susanta Biswas for your full support.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="reviews-div-inner-w-two d-flex justify-content-center">
          <div className="reviews-div-q bg-light text-dark d-flex flex-column justify-content-center" style={{ width: "90%" }}>
            {/* <h3>Quote</h3> */}
            <div className="d-flex" style={{gap: '12px'}}>
              {/* <img src="" alt="" /> */}
              <div className="reviews-div-inner-text-one">
                <h5>Anmol Thapa</h5>
                <p>I have tried many marketing agencies, but never felt like Koadai. Their service was inpeccable. What a lovely dedication to your work.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
