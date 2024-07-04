// src/components/PersonalInfoForm.js
import React, { useState } from 'react';

const PersonalInfoForm = ({ onChange }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => {
      const updatedForm = {
        ...prevForm,
        [name]: value,
      };
      onChange(updatedForm);
      return updatedForm;
    });
  };

  return (
    <form>
          <h2>Personal Information</h2>

      <div>
        <label>
          Name:
          <input type="text" name="name" value={form.name} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Phone:
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Address:
          <input type="text" name="address" value={form.address} onChange={handleChange} />
        </label>
      </div>
    </form>
  );
};

export default PersonalInfoForm;
