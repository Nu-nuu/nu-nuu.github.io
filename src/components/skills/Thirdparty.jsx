import React from 'react'
import { TP } from '../../data'

const Thirdparty = () => {
    return (
        <div className="skills_content">
            <h3 className="skills_title">Third-party technologies</h3>
            <div className="skills_box">
                <div className="skills_group">
                    {TP.map(({ skill, level, id }) => (
                        <div className="skills_data" key={id}>
                            <i className="uil uil-check-circle"></i>
                            <div>
                                <h3 className="skills_name">{skill}</h3>
                                <span className="skills_level">{level}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Thirdparty