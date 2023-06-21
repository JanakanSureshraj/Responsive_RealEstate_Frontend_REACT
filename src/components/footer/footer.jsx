import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="padding innerWidth flexCenter f-container">
            {/*left side */}
            <div className="flexColStart f-left">
                <img src="./logo.jpg" alt="" width={120}/>
                <span className="secondaryText">
                    Our vision is to make all people <br/> have their dream home.
                </span>
            </div>
            <div className="flexColStart f-right">
                <span className='primaryText'>Location</span>
                <span className='secondaryText'>Colombo 04</span>

                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Products</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer