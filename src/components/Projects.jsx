// components/Projects.jsx
import React from 'react';
import './../styles/Projects.css';

function Projects() {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="projects-container">
                {/* Project 1 */}
                <div className="project-item">
                    <h3>Project Title 1</h3>
                    <p>Description of the project goes here.</p>
                </div>
                {/* Project 2 */}
                <div className="project-item">
                    <h3>Project Title 2</h3>
                    <p>Description of the project goes here.</p>
                </div>
                {/* Add more projects as needed */}
            </div>
        </section>
    );
}

export default Projects;
