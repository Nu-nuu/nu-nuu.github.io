import React from 'react'

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i className="uil uil-award"></i>
        <h3 className="about_title">Experience</h3>
        <span className="about_subtitle">{`< 2 Years Working`}</span>
      </div>

      <div className="about_box">
        <i className="uil uil-briefcase-alt"></i>

        <h3 className="about_title">Complete</h3>
        <span className="about_subtitle">14+ Projects</span>
      </div>

      <div className="about_box">
        <i className="uil uil-code-branch"></i>

        <h3 className="about_title">Commit</h3>
        <span className="about_subtitle">1000+ Commits</span>
      </div>

    </div>
  )
}

export default Info