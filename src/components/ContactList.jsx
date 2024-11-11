import React from "react";

const ContactList = ({ contacts, onDelete, onEdit, onView }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Mobile</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {contacts.length === 0 ? (
        <tr>
          <td colSpan="4">No Contacts Found</td>
        </tr>
      ) : (
        contacts.map((contact) => (
          <tr key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.mobile}</td>
            <td>{contact.email}</td>
            <td>
              <button onClick={() => onView(contact)}>View</button>
              <button onClick={() => onEdit(contact)}>Edit</button>
              <button onClick={() => onDelete(contact.id)}>Delete</button>
            </td>
          </tr>
        ))
      )}
    </tbody>
  </table>
);

export default ContactList;
