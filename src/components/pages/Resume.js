import React from "react";

function Resume() {
    return (
        <div>
            <h2>Proficiencies</h2>
            <ul className="proList">
                <li>React</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>Quality Assurance</li>
                <li>Managment</li>
                <li>Accounting</li>
            </ul>
            <a href="/assets/Candler Starke Resume.pdf" className="resume" download>Click to download resume</a>
        </div>
    )
}

export default Resume;