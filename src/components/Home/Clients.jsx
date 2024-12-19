import React from 'react'
import '../../assets/css/Clients.css'
import clientsOne from '../../assets/images/clients-one.jpg'
import clientsTwo from '../../assets/images/clients-two.jpg'
import clientsThree from '../../assets/images/clients-three.jpg'

function Clients() {
  return (
    <div className='clients-div mb-5'>
        <h1>Our Clients</h1>
        <div className="clients-inner d-flex justify-content-around">
            <div className="clients-card">
              <img src={clientsOne} alt="" />
            </div>
            <div className="clients-card">
              <img src={clientsTwo} alt="" />
            </div>
            <div className="clients-card">
              <img src={clientsThree} alt="" />
            </div>
        </div>
        {/* <div className="clients-inner-lower d-flex justify-content-around">
            <div className="clients-card-slider"></div>
            <div className="clients-card-slider"></div>
            <div className="clients-card-slider"></div>
            <div className="clients-card-slider"></div>
            <div className="clients-card-slider"></div>
        </div> */}
    </div>
  )
}

export default Clients
