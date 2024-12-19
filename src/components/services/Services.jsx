
import React from 'react'
import '../../assets/css/Services/services.css'
function Services() {
    return (
        <>
            <div className='services-main-div'>
                <div className='slider-main d-flex flex-column align-items-center'>
                    <div className='cardo d-flex flex-column' style={{ textAlign: 'center' }}>
                        <h2>Register your account on the marketplace</h2>
                        <p style={{ marginTop: '5%' }}>We will help you get started with your account marketplace
                            registration. Get support for absolutely free in case of
                            domestic account registration over multiple platforms like
                            Amazon and Flipkart. To register on foreign grounds, check
                            with us for the plans.</p>
                    </div>
                    <div className='cardtw d-flex flex-column' style={{ textAlign: 'center', height: '500px' }}>
                        <h2>Hire our experts to handle your e-com accounts</h2>
                        <p style={{ marginTop: '5%'}}>Flat 50% off for the first 3 months on marketplace account handling. Fast-Track Product Listings: List up to 50 products free of charge in the first month. Free online marketplace registration in Amazon, flipkart, meesho, Ajio etc for domestic.</p>
                    </div>
                    <div className='cardth d-flex flex-column' style={{ textAlign: 'center', height:'500px' }}>
                        <h2>Launch Your Website for Just Rs. 999!</h2>
                        <p style={{ marginTop: '5%' }}>Ready to build your online presence but hesitant about the upfront investment? We're making it easy to start by offering professional website development for only Rs. 999 upfront. Pay the remaining balance only when your website goes live! Make the Rs.999 investment to get started, and watch your digital presence take shape.</p>
                    </div>
                    <div className='cardfo d-flex flex-column' style={{ textAlign: 'center', height: '500px' }}>
                        <h2>Transform Your Brand Online for Just Rs. 4,999/month!</h2>
                        <p style={{ marginTop: '5%' }}>Unleash your brand's potential with our all-in-one Digital Marketing Package at a breakthrough price of Rs.4,999/month. Sign up today and enjoy your first month of ad management free! Don't wait to elevate your online presence; start seeing real results now!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
