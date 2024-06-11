import React, { useState } from 'react'
import './qualification.css'
import { EDU, EXP } from '../../data'

const Qualification = () => {

    const [toggle, setToggle] = useState(1)

    const toggleTab = (index) => {
        setToggle(index)
    }

    return (
        <section className="qualification section" > 
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div className={toggle === 1 ? "qualification_button qualification_active button--flex" :
                        "qualification_button button--flex"}
                        onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification_icon"></i>
                        Education
                    </div>

                    <div className={toggle === 2 ? "qualification_button qualification_active button--flex" :
                        "qualification_button button--flex"}
                        onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification_icon"></i>
                        Experience
                    </div>
                </div>
                {/* education */}
                <div className="qualification_sections">
                    <div className={toggle === 1 ? "qualification_content-active" : "qualification_content"}>
                        {EDU.map(({ id, title, area, time }) => (
                            <div className="qualification_data" key={id}>
                                {id % 2 === 0 && (
                                    <>
                                        <div />
                                        <div>
                                            <span className="qualification_rounder"></span>
                                            <span className="qualification_line"></span>
                                        </div>
                                    </>
                                )}
                                <div>
                                    <h3 className="qualification_title">{title}</h3>
                                    <span className="qualification_subtitle">{area}</span>
                                    <div className="qualification_calendar">
                                        <i className="uil uil-calendar-alt">{time}</i>
                                    </div>
                                </div>
                                {id % 2 != 0 && (
                                    <div>
                                        <span className="qualification_rounder"></span>
                                        <span className="qualification_line"></span>
                                    </div>
                                )}
                            </div>
                        ))}

                    </div>
                </div>
                {/* experience */}
                <div className="qualification_sections">
                    <div className={toggle === 2 ? "qualification_content-active" : "qualification_content"}>
                        {EXP.map(({ id, title, area, time }) => (
                            <div className="qualification_data" key={id}>
                                {id % 2 === 0 && (
                                    <>
                                        <div />
                                        <div>
                                            <span className="qualification_rounder"></span>
                                            <span className="qualification_line"></span>
                                        </div>
                                    </>
                                )}
                                <div>
                                    <h3 className="qualification_title">{title}</h3>
                                    <span className="qualification_subtitle">{area}</span>
                                    <div className="qualification_calendar">
                                        <i className="uil uil-calendar-alt">{time}</i>
                                    </div>
                                </div>
                                {id % 2 != 0 && (
                                    <div>
                                        <span className="qualification_rounder"></span>
                                        <span className="qualification_line"></span>
                                    </div>
                                )}
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification