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
            <h2>Experience</h2>

            <input
                type="text"
                name="company"
                placeholder="Company"
                value={experience.company}
                onChange={handleChange}
            />
            <input
                type="text"
                name="position"
                placeholder="Position"
                value={experience.position}
                onChange={handleChange}
            />
            <input
                type="text"
                name="startDate"
                placeholder="Start Date"
                value={experience.startDate}
                onChange={handleChange}
            />
            <input
                type="text"
                name="endDate"
                placeholder="End Date"
                value={experience.endDate}
                onChange={handleChange}
            />
            <textarea
                name="description"
                placeholder="Description"
                value={experience.description}
                onChange={handleChange}
            />
            <button type="submit">Add Experience</button>
        </form>
    );
};

export default ExperienceForm;
