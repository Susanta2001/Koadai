import React from 'react'
import '../../assets/css/BrandingSecond.css'
import biImgOne from '../../assets/images/bi-img-one.png'
import biImgTwo from '../../assets/images/bi-img-two.jpeg'
import biImgThree from '../../assets/images/bi-img-three.png'

function BrandingSecond() {
  return (
    <div className='branding-second-div d-flex flex-column p-4'>
        <h1 className='text-center'>IN JUST A CLICK</h1>
        <div className="brand-second-div-inner d-flex">
            <div className="brand-second-inner-cards card-hover" id="cards-1">
                <img src={biImgOne} alt="" />
            </div>
            <div className="brand-second-inner-cards" id="cards-2">
                <img src={biImgThree} alt="" />
            </div>
            <div className="brand-second-inner-cards" id="cards-3">
                <img src={biImgTwo} alt="" />
            </div>
        </div>
    </div>
  )
}

export default BrandingSecond
