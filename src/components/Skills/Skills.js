import { faHtml5 , faCss3Alt , faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Skills.css'
function Skills() {
  return (
    <div>
        <div class="skills_title_body">
            <h1 class="skills_title">SKILLS</h1>
        </div>
        <div className="html_title">
            <p>HTML5</p>
            <FontAwesomeIcon icon={faHtml5} />
        </div>
        <div className="css_title">
            <p>CSS3</p>
            <FontAwesomeIcon icon={faCss3Alt} />
        </div>
        <div className="javascript_title">
            <p>JavaScript</p>
            <FontAwesomeIcon icon={ faJsSquare } />
        </div>
        <div className="react_title">
            <p>React</p>
            <FontAwesomeIcon icon={ faReact } />
        </div>
    </div>

  )
}

export default Skills