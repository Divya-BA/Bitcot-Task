import React, { useState, useEffect } from "react";
import ContactList from "./components/ContactList";
import AddEditContact from "./components/AddEditContact";
import ContactDetails from "./components/ContactDetails";
import SearchContact from "./components/SearchContact";
import contactsData from "./data/contacts.json";
import "./App.css";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setContacts(contactsData);
  }, []);

  const handleAddEditContact = (contact) => {
    if (isEdit) {
      setContacts(contacts.map((c) => (c.id === contact.id ? contact : c)));
    } else {
      setContacts([...contacts, { ...contact, id: Date.now() }]);
    }
    setIsModalOpen(false);
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredContacts = contacts.filter(
    ({ name, mobile }) =>
      name.toLowerCase().includes(searchTerm) || mobile.includes(searchTerm)
  );

  const openAddContactModal = () => {
    setIsModalOpen(true);
    setIsEdit(false);
    setIsDetailsOpen(false);
    setSelectedContact(null); 
  };

  const openEditContactModal = (contact) => {
    setIsModalOpen(true);
    setIsEdit(true);
    setIsDetailsOpen(false); 
    setSelectedContact(contact); 
  };

  const openViewContactDetails = (contact) => {
    setIsDetailsOpen(true);
    setIsModalOpen(false); 
    setSelectedContact(contact);
  };

  return (
    <div>
      <h2>Contacts</h2>
      <SearchContact onSearch={handleSearch} />
      <button onClick={openAddContactModal}>Add Contact</button>
      <ContactList
        contacts={filteredContacts}
        onDelete={handleDeleteContact}
        onEdit={openEditContactModal}
        onView={openViewContactDetails}
      />
      {isModalOpen && (
        <AddEditContact
          contact={isEdit ? selectedContact : null}
          onSave={handleAddEditContact}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      {isDetailsOpen && (
        <ContactDetails
          contact={selectedContact}
          onClose={() => setIsDetailsOpen(false)}
        />
      )}
    </div>
  );
};

export default App;
