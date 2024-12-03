// components/Experience.jsx
import React from 'react';
import './../styles/Experience.css';

function Experience() {
    return (
        <section id="experience">
            <h2>Experience</h2>

            <div className="experience-item">
                <h3>Software Developer Contractor</h3>
                <h4>MagMutual Insurance Company - Atlanta, Georgia</h4>
                <p>September 2023 - Present</p>
                <ul>
                    <li>Collect data tied to various geographic regions, relating it to MagMutual's internal data using statistical models, and visualizing this data.</li>
                    <li>Create impactful representations of complex data tied to geographic regions.</li>
                </ul>
            </div>

            <div className="experience-item">
                <h3>Software Developer Summer Intern</h3>
                <h4>MagMutual Insurance Company - Atlanta, Georgia</h4>
                <p>May 2023 - August 2023</p>
                <ul>
                    <li>Developed Full Stack Data Analysis Application.</li>
                    <li>Wrote code to clean, transform, and analyze data.</li>
                    <li>Created software for data visualizations and reports.</li>
                </ul>
            </div>

            <div className="experience-item">
                <h3>IT Project Manager</h3>
                <h4>Resilience, Inc. - Tampa, Florida</h4>
                <p>March 2023 - August 2023</p>
                <ul>
                    <li>Oversaw the app development project AIMEE.</li>
                    <li>Managed a team of 6 Developers and AI Engineers.</li>
                    <li>Conducted weekly meetings to ensure goals are achieved.</li>
                    <li>Successfully launched AI integrated mobile application on Apple and Google store.</li>
                </ul>
            </div>

            <div className="experience-item">
                <h3>Website and Data Support Intern</h3>
                <h4>Danse Equipment Company Inc. - Beltsville, Maryland</h4>
                <p>May 2022 - January 2023</p>
                <ul>
                    <li>Conducted market research to identify potential products for the e-commerce platform.</li>
                    <li>Worked with the website management company to address issues and implement new features.</li>
                </ul>
            </div>
        </section>
    );
}

export default Experience;
