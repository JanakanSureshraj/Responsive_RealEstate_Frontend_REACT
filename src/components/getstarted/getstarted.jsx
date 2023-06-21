import React from 'react'
import "./getstarted.css"

const GetStarted = () => {
  return (
    <section className="g-wrapper">
        <div className="container innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started with DJ Realtors</span>
                <span className='secondaryText'>Find your residence soon.</span>
                <button className="button">
                    <a href="mailto:xyz@gmail.com">Email Us!</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted