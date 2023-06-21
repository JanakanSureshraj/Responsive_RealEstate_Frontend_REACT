import React from 'react'
import {
    Accordion,
    AccordionItem, 
    AccordionItemHeading, 
    AccordionItemButton, 
    AccordionItemPanel, 
    AccordionItemState
} from "react-accessible-accordion"
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from "react-icons/md"
import "./values.css"
import data from "../../utils/accordion"
import { useState } from 'react'

const Values = () => {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            {/*left side*/}
            <div className="v-left">
                <div className="image-container">
                    <img src="./value.png" alt="" />
                </div>
            </div>
            {/*right side*/}
            <div className="flexColStart v-right">
                <span className="orangeText">Our Values</span>
                <span className='primaryText'>Why Choose Us?</span>
                <span className='secondaryText'>We are always ready to help by providing the best service to you. 
                    <br/>
                    We believe a good place to live makes your life better.
                </span>

                <Accordion className="Accordion"
                allowMultipleExpanded={false}
                preExpanded={[0]}
                >
                    {data.map((item, i)=>{
                                const [className, setClassName] = useState(null)
                            return(
                                <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}> 
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='flexCenter accordionButton'>

                                            <AccordionItemState>
                                                {({expanded}) => expanded ? setClassName("expanded") : setClassName("collapsed")}
                                            </AccordionItemState>

                                            <div className="flexCenter icon">
                                                {item.icon}
                                            </div>
                                            <span className="primaryText">
                                                {item.heading}
                                            </span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading> 

                                    <AccordionItemPanel>
                                        <p className="secondaryText">
                                            {item.detail}
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
            </div>
        </div>
    </section>
  )
}

export default Values
