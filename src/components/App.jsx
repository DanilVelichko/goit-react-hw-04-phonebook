import React, { useState } from 'react';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';
import useLocalStorage from '../hooks/useLocalStorage';

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
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

  const handleDataUpdate = (input) => {
    setFilter(input.currentTarget.value);
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

  return (
    <>
      <Form clickSubmit={formSubmitHandler} />

      <Filter onDataUpdate={handleDataUpdate} />

      <ContactsList arrContacts={filterContacts()} onDeleteBtn={onDeleteBtn} />
    </>
  );
};

export default App;
