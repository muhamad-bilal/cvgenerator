// src/components/CVPreview.jsx
import React from 'react';

const CVPreview = ({ personalInfo }) => {
  return (
    <div>
      <h2>CV Preview</h2>
      <p><strong>Name:</strong> {personalInfo.name}</p>
      <p><strong>Email:</strong> {personalInfo.email}</p>
      <p><strong>Address:</strong> {personalInfo.address}</p>
      <p><strong>Phone:</strong> {personalInfo.phone}</p>
      <p><strong>Education:</strong> {personalInfo.education}</p>
      <p><strong>Experience:</strong> {personalInfo.experience}</p>
    </div>
  );
};

export default CVPreview;
