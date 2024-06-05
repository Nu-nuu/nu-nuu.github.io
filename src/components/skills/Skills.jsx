import React from 'react'
import './skills.css'
import Frontend from './Frontend'
import Backend from './Backend'
import Thirdparty from './Thirdparty'
const Skills = () => {
    return (
        <section className="skills section" id='skills'>
            <h2 className="section__title">Skills</h2>

            <span className="section__subtitle">My technical level</span>
            <div className="skills_container_fe container grid">
                <Frontend />
            </div>

            <div className="skills_container container grid">
                <Backend />
                <Thirdparty />
            </div>
        </section>
    )
}

export default Skills