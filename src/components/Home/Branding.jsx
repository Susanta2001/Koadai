import React from 'react'
import '../../assets/css/Branding.css'

function Branding() {
  return (
    <div className='branding-div p-4'>
        <h1 className='text-center'>Branding</h1>
        <div className="branding-div-inner w-100 d-flex">
                <div className="branding-left w-75 border"></div>
                <div className="branding-right ps-4 pe-5 w-25 ">
                    <div className="branding-right-inner"></div>
                    <h2>BRANDING IN A WHOLE NEW LEVEL</h2>
                </div>
        </div>
    </div>
  )
}

export default Branding
