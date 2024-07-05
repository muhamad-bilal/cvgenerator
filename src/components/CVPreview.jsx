import React from 'react';

const CVPreview = ({ personalInfo, education, experience }) => {
    return (
        <div className="cv-preview">  
            <div className="section">
                <h2>Personal Information</h2>
                <p><strong>Name:</strong> {personalInfo.name}</p>
                <p><strong>Email:</strong> {personalInfo.email}</p>
                <p><strong>Phone:</strong> {personalInfo.phone}</p>
                <p><strong>Address:</strong> {personalInfo.address}</p>
            </div>
            <div className="section">
                <h2>Education</h2>
                {education.map((edu, index) => (
                    <div key={index}>
                        <h3>{edu.school}</h3>
                        <p><strong>Institution:</strong> {edu.institution}</p>
                        <p><strong>Degree:</strong> {edu.degree}</p>
                        <p><strong>Duration:</strong> {edu.startDate} - {edu.endDate}</p>
                    </div>
                ))}
            </div>
            <div className="section">
                <h2>Experience</h2>
                {experience.map((exp, index) => (
                    <div key={index}>
                        <h3>{exp.company}</h3>
                        <p><strong>Role:</strong> {exp.position}</p>
                        <p><strong>Duration:</strong> {exp.startDate} - {exp.endDate}</p>
                        <p><strong>Description:</strong> {exp.description}</p>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default CVPreview;
