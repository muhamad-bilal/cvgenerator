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

    const toggleCollapsible = (e) => {
        e.target.classList.toggle("collapsible-active");
        const content = e.target.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    };

    return (
        <div className="App">
            <Header />
            <div className="group1">
                <div className="personal-info">
                    <button className="collapsible" onClick={toggleCollapsible}>Personal Information</button>
                    <div className="collapsible-content">
                        <PersonalInfoForm onChange={setPersonalInfo} />
                    </div>
                    
                    <button className="collapsible" onClick={toggleCollapsible}>Education</button>
                    <div className="collapsible-content">
                        <EducationForm onAdd={addEducation} />
                        <Education education={education} onDelete={deleteEducation} />
                    </div>
                    
                    <button className="collapsible" onClick={toggleCollapsible}>Experience</button>
                    <div className="collapsible-content">
                        <ExperienceForm onAdd={addExperience} />
                        <Experience experience={experience} onDelete={deleteExperience} />
                    </div>
                </div>
                <div className="cv-preview">
                    <CVPreview personalInfo={personalInfo} education={education} experience={experience} />
                </div>
            </div>
        </div>
    );
};

export default App;
