import React from "react";
import {HiLocationMarker} from "react-icons/hi"
import CountUp from "react-countup";
import {motion} from "framer-motion"
import "./hero.css"

const Hero= () => {
    return(
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                
                {/*left side*/}
                <div className="flexColStart hero-left">

                    <div className="hero-title">
                        <div className="orange-circle"/>
                        <motion.h1
                        initial = {{y: "2rem", opacity:0}}
                        animate = {{y: 0, opacity:1}}
                        transition = {{
                            duration: 2, 
                            type: "spring"
                        }}
                        >
                            Discover <br />Your Deam<br />Home!
                        </motion.h1>
                    </div>

                    <div className="flexColStart hero-des">
                    <span className="secondaryText">Choose from a variety of properties that suit you very easily.</span>
                    <span className="secondaryText">Forget all difficulties in finding a residence.</span>
                    </div>
                    <div className="flexCenter search-bar">
                        <HiLocationMarker color="var(--blue)" size={25}/>
                        <input type="text" placeholder="Type a location..."/>
                        <button className="button">Search</button>
                    </div>
                    <div className="flexCenter stats">
                        <div className="flexColStart stat">
                            <span>
                                <CountUp start={8800} end={9000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Premium Products</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={1950} end={2000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Happy Customers</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp end={30}/>
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Awards</span>
                        </div>
                    </div>
                </div>

                {/*right side*/}
                <div className="flexCenter hero-right">
                    <motion.div 
                    className="image-container"
                    initial = {{x: "7rem", opacity: 0}}
                    animate = {{x:0, opacity:1}}
                    transition = {{
                        duration: 2, 
                        type: "spring"
                    }}
                    >
                        <img src="./residence6.jpg" alt="" />
                    </motion.div>
                </div>
            </div>
            
        </section>
    )
}

export default Hero;