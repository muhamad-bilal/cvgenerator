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
            <label>
                Institution:
            <input
                type="text"
                name="institution"
                value={education.institution}
                onChange={handleChange}
            />
            </label>
            <label>
                Degree:
            <input
                type="text"
                name="degree"
                value={education.degree}
                onChange={handleChange}
            />
            </label>
            <label>Start Date:
            <input
                type="text"
                name="startDate"
                value={education.startDate}
                onChange={handleChange}
            />
            </label>
            <label>End Date:
            <input
                type="text"
                name="endDate"
                value={education.endDate}
                onChange={handleChange}
            />
            </label>
            <button type="submit">Add Education</button>
        </form>
    );
};

export default EducationForm;
