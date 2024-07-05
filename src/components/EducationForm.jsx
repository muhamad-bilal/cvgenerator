// src/components/EducationForm.jsx
import React, { useState } from 'react';

const EducationForm = ({ onAdd }) => {
    const [education, setEducation] = useState({
        institution: '',
        degree: '',
        startDate: '',
        endDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEducation((prevEducation) => ({
            ...prevEducation,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(education);
        setEducation({
            institution: '',
            degree: '',
            startDate: '',
            endDate: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                name="institution"
                placeholder="Institution"
                value={education.institution}
                onChange={handleChange}
            />
            <input
                type="text"
                name="degree"
                placeholder="Degree"
                value={education.degree}
                onChange={handleChange}
            />
            <input
                type="text"
                name="startDate"
                placeholder="Start Date"
                value={education.startDate}
                onChange={handleChange}
            />
            <input
                type="text"
                name="endDate"
                placeholder="End Date"
                value={education.endDate}
                onChange={handleChange}
            />
            <button type="submit">Add Education</button>
        </form>
    );
};

export default EducationForm;
