// src/components/Experience.jsx
import React from 'react';

const Experience = ({ experience, onDelete }) => {
    return (
        <div className="experience">
            {experience.map((exp, index) => (
                <div key={index} className="experience-item">
                    <h3>{exp.company}</h3>
                    <p>{exp.position}</p>
                    <p>{exp.startDate} - {exp.endDate}</p>
                    <p>{exp.description}</p>
                    <button onClick={() => onDelete(index)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default Experience;
