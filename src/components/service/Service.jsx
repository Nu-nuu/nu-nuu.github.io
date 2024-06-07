import React, { useState } from 'react'
import './service.css'
import { WEBINFO, UU, UUINFO, WEB, MOBINFO, MOB } from '../../data'

const Service = () => {
    const [toggle, setToggle] = useState(0)

    const toggleTab = (index) => {
        setToggle(index)
    }
    return (
        <section className="services section" id='services'>
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>

            <div className="services_container container grid">
                <div className="services_content">
                    <div>
                        <i className="uil uil-web-grid services_icon"></i>
                        <h3 className="services_title">
                            Web <br /> Developer
                        </h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(1)}>
                        View more
                        <i className="uil uil-arrow-right services_button-icon"></i>
                    </span>

                    <div className={toggle === 1 ? "services_modal active-modal"
                        : "services_modal"
                    }>
                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                            <h3 className="services_modal-title">{WEBINFO.title}</h3>
                            <p className="services_modal-description">
                                {WEBINFO.description}
                            </p>
                            <ul className="services_modal-services grid">
                                {WEB.map(({ description, id }) => (
                                    <li className="services_modal-service" key={id}>
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_modal-info">
                                            {description}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="uil uil-mobile-vibrate services_icon"></i>
                        <h3 className="services_title">
                            Mobile <br /> Developer
                        </h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(2)}>
                        View more
                        <i className="uil uil-arrow-right services_button-icon"></i>
                    </span>

                    <div className={toggle === 2 ? "services_modal active-modal"
                        : "services_modal"
                    }>
                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                            <h3 className="services_modal-title">{MOBINFO.title}</h3>
                            <p className="services_modal-description">
                                {MOBINFO.description}
                            </p>
                            <ul className="services_modal-services grid">
                                {MOB.map(({ description, id }) => (
                                    <li className="services_modal-service" key={id}>
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_modal-info">
                                            {description}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="uil uil-edit services_icon"></i>
                        <h3 className="services_title">
                            UX/UI <br /> Designer
                        </h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(3)}>
                        View more
                        <i className="uil uil-arrow-right services_button-icon"></i>
                    </span>

                    <div className={toggle === 3 ? "services_modal active-modal"
                        : "services_modal"
                    }>
                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>
                            <h3 className="services_modal-title">{UUINFO.title}</h3>
                            <p className="services_modal-description">
                                {UUINFO.description}
                            </p>
                            <ul className="services_modal-services grid">
                                {UU.map(({ description, id }) => (
                                    <li className="services_modal-service" key={id}>
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_modal-info">
                                            {description}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service