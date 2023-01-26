import { useState, useEffect } from 'react';
import React from 'react';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';
import useLocalStorage from './hooks/useLocalStorage';

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', '');
  const [filter, setFilter] = useState('');

  const formSubmitHandler = data => {
    const matchNameInput = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (matchNameInput) {
      alert(data.name + ' is already in contacts.');
    } else {
      setContacts(prev => [...prev, data]);
    }
  };

  const handleDataUpdate = input => {
    setFilter(input);
  };

  const filterContacts = () => {
    if (filter !== '') {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase().trim())
      );
    } else {
      return contacts;
    }
  };

  const onDeleteBtn = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const saveToLocalStorageContact = obj => {
    window.localStorage.setItem('contacts', JSON.stringify(obj));
  };

  const getFromLocalStorageContact = () => {
    const getLocalStorageContacts = JSON.parse(
      localStorage.getItem('contacts')
    );
    if (getLocalStorageContacts !== null) {
      setContacts(getLocalStorageContacts);
    }
  };

  useEffect(() => {
    saveToLocalStorageContact(contacts);
  }, [contacts]);

  return (
    <>
      <Form clickSubmit={formSubmitHandler} />

      <Filter onDataUpdate={handleDataUpdate} />

      <ContactsList arrContacts={filterContacts()} onDeleteBtn={onDeleteBtn} />
    </>
  );
};

export default App;
