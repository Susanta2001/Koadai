import React from 'react'
import '../../assets/css/userreg.css'
import ImgA from '../../assets/images/amazon.png'
import ImgF from '../../assets/images/flipkart.png'
import ImgW from '../../assets/images/walmart.png'
function UserReg() {
    return (
        <div className='userreg-main' style={{ backgroundColor: 'black' }}>
            <div className='userreg-main-firstdiv d-flex flex-column align-items-center'>
                <h1 style={{ color: '#B3B3B3', marginBottom: '1px' }}>Online Marketplace Registration</h1>
                <p style={{ color: '#757575' }}>Digital Marketing</p>
            </div>
            <div className='userreg-main-seconddiv d-flex justify-content-around' style={{ paddingRight: '1%' }}>
                <div style={{ width: '30%' }}>
                    <img src={ImgA} alt='' style={{ width: '100%' }}></img>
                </div>
                <div style={{ width: '30%' }}>
                    <img src={ImgF} alt='' style={{ width: '100%' }}></img>
                </div>
                <div style={{ width: '30%' }}>
                    <img src={ImgW} alt='' style={{ width: '100%' }}></img>
                </div>
            </div>
            <div className='userreg-main-thirddiv d-flex flex-row-reverse' style={{ paddingRight: '3%' }}>
                <a href="/">Know more</a>
            </div>
        </div>
    )
}
export default UserReg