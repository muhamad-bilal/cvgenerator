// src/components/Education.jsx
import React from 'react';

const Education = ({ education, onDelete }) => {
    return (
        <div className="education">
            <h2>Education</h2>
            {education.map((edu, index) => (
                <div key={index} className="education-item">
                    <h3>{edu.institution}</h3>
                    <p>{edu.degree}</p>
                    <p>{edu.startDate} - {edu.endDate}</p>
                    <button onClick={() => onDelete(index)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default Education;
