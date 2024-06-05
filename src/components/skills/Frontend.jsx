import React from 'react'
import { FE } from '../../data'

const Frontend = () => {
    return (
        <div className="skills_content">
            <h3 className="skills_title">Front-End technologies</h3>
            <div className="skills_box">
                <div className="skills_group_fe">
                    {FE.map(({ skill, level, id }) => (
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

export default Frontend