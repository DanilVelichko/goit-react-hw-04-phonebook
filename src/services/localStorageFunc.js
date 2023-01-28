import App from "components/App"; 

export const saveToLocalStorageContact = obj => {
    window.localStorage.setItem('contacts', JSON.stringify(obj));
  };

 export const getFromLocalStorageContact = () => {
    const getLocalStorageContacts = JSON.parse(
      localStorage.getItem('contacts')
    );
    if (getLocalStorageContacts !== null) {
      App.setContacts(getLocalStorageContacts);
    }
};
  
