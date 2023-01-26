import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ onDataUpdate }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    const { value } = e.currentTarget;

    setInputValue(value);
    onDataUpdate(value);
  };

  return (
    <>
      <h2 className={css.contacts_title}>Contacts</h2>
      <h3 className={css.filter_title}>Find contacts by name</h3>
      <div className={css.contacts_input}>
        <input
          type="text"
          name="filter"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

Filter.propTypes = {
  onDataUpdate: PropTypes.func.isRequired,
};

export default Filter;
