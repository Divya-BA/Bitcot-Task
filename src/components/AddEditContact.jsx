import React, { useState, useEffect } from "react";

const AddEditContact = ({ contact, onSave, onClose }) => {
  const [formData, setFormData] = useState({ name: "", mobile: "", email: "" });

  useEffect(() => {
    if (contact) setFormData(contact);
  }, [contact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="form-container">
      <h2>{contact ? "Edit Contact" : "Add Contact"}</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default AddEditContact;
