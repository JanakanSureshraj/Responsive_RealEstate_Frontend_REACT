import React from 'react'
import {MdCall} from "react-icons/md"
import {BsFillChatDotsFill} from "react-icons/bs"
import {FaWhatsapp} from "react-icons/fa"
import {FaFacebookF} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import "./contact.css"

const Contact = () => {
  return (
   <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            {/*left side */}
            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contact</span>
                <span className='primaryText'>Just a Click Away!</span>
                <span className='secondaryText'>Our team always provides the best service to you. </span>

                <div className="flexColStart contactModes">

                    {/*first row */}
                    <div className="flexStart row">
                        <div className="flexColStart mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Call</span>
                                    <span className='secondaryText'>077 123 4567</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>

                        <div className="flexColStart mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <FaWhatsapp size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">WhatsApp</span>
                                    <span className='secondaryText'>077 123 4567</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Chat Now</div>
                        </div>
                    </div>

                    {/*second row */}
                    <div className="flexStart row">
                        <div className="flexColStart mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <FaFacebookF size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Facebook</span>
                                    <span className='secondaryText'>@djrealtorscmb</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Follow and DM Now</div>
                        </div>

                        <div className="flexColStart mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <FaInstagram size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Instagram</span>
                                    <span className='secondaryText'>@djrealtorscmb</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Follow and DM Now</div>
                        </div>
                                     
                    </div>
                </div>
            </div>

            {/*right side */}
            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>

        </div>
   </section>
  )
}

export default Contact