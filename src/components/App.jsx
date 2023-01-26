import React, { useState, useEffect } from 'react';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';
import useLocalStorage from './hooks/useLocalStorage';
import * as localStoreFuncs from './services/localStorageFunc';

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

  const handleDataUpdate = input => {
    setFilter(input);
  };

  const filterContacts = () => {
    console.log(contacts)
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

  useEffect(() => {
   if (contacts.length > 0){
     localStoreFuncs.saveToLocalStorageContact(contacts);
  }
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
