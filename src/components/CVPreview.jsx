// src/components/CVPreview.jsx
import React from 'react';

const CVPreview = ({ personalInfo, education, experience }) => {
    return (
        <div className="cv-preview">
            <h2>CV Preview</h2>
            {personalInfo.name || personalInfo.email || personalInfo.phone || personalInfo.address? (
                <div>
                    <h3>Personal Information</h3>
                    {personalInfo.name && <p>Name: {personalInfo.name}</p>}
                    {personalInfo.email && <p>Email: {personalInfo.email}</p>}
                    {personalInfo.phone && <p>Phone: {personalInfo.phone}</p>}
                    {personalInfo.address && <p>Address: {personalInfo.address}</p>}

                </div>
            ) : null}
            {education.length > 0 ? (
                <div>
                    <h3>Education</h3>
                    {education.map((edu, index) => (
                        <div key={index}>
                            <h4>{edu.institution}</h4>
                            <p>{edu.degree}</p>
                            <p>{edu.startDate} - {edu.endDate}</p>
                        </div>
                    ))}
                </div>
            ) : null}
            {experience.length > 0 ? (
                <div>
                    <h3>Experience</h3>
                    {experience.map((exp, index) => (
                        <div key={index}>
                            <h4>{exp.company}</h4>
                            <p>{exp.position}</p>
                            <p>{exp.startDate} - {exp.endDate}</p>
                            <p>{exp.description}</p>
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    );
};

export default CVPreview;
