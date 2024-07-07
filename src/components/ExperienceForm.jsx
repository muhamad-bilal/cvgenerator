// src/components/ExperienceForm.jsx
import React, { useState } from 'react';

const ExperienceForm = ({ onAdd }) => {
    const [experience, setExperience] = useState({
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExperience((prevExperience) => ({
            ...prevExperience,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(experience);
        setExperience({
            company: '',
            position: '',
            startDate: '',
            endDate: '',
            description: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Company:
            <input
                type="text"
                name="company"
                value={experience.company}
                onChange={handleChange}
            />
            </label>
            <label>Position:
            <input
                type="text"
                name="position"
                value={experience.position}
                onChange={handleChange}
            />
            </label>
            <label>Start Date:
            <input
                type="text"
                name="startDate"
                value={experience.startDate}
                onChange={handleChange}
            />
            </label>
            <label>End Date:
            <input
                type="text"
                name="endDate"
                value={experience.endDate}
                onChange={handleChange}
            /></label>
            <label>Description:
            <textarea
                name="description"
                value={experience.description}
                onChange={handleChange}
            /></label>
            <button type="submit">Add Experience</button>
        </form>
    );
};

export default ExperienceForm;
