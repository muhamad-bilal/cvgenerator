// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import PersonalInfoForm from './components/PersonalInfoForm';
import CVPreview from './components/CVPreview';
import Education from './components/Education';
import Experience from './components/Experience';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';
import './style.css';

const App = () => {
    const [personalInfo, setPersonalInfo] = useState({});
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);

    const addEducation = (edu) => {
        setEducation((prevEducation) => [...prevEducation, edu]);
    };

    const addExperience = (exp) => {
        setExperience((prevExperience) => [...prevExperience, exp]);
    };

    const deleteEducation = (index) => {
        setEducation((prevEducation) => prevEducation.filter((_, i) => i !== index));
    };

    const deleteExperience = (index) => {
        setExperience((prevExperience) => prevExperience.filter((_, i) => i !== index));
    };

    return (
        <div className="App">
            <Header />
            <div className="group1">
                <div className="personal-info">
                    <PersonalInfoForm onChange={setPersonalInfo} />
                    <EducationForm onAdd={addEducation} />
                    <Education education={education} onDelete={deleteEducation} />
                    <ExperienceForm onAdd={addExperience} />
                    <Experience experience={experience} onDelete={deleteExperience} />
                </div>
                <div className="cv-preview">
                    <CVPreview personalInfo={personalInfo} education={education} experience={experience} />
                </div>
            </div>
        </div>
    );
};

export default App;
