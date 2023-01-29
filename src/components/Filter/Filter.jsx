import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ onDataUpdate }) => {

  return (
    <>
      <h2 className={css.contacts_title}>Contacts</h2>
      <h3 className={css.filter_title}>Find contacts by name</h3>
      <div className={css.contacts_input}>
        <input
          type="text"
          name="filter"
          onChange={onDataUpdate}
        />
      </div>
    </>
  );
};

Filter.propTypes = {
  onDataUpdate: PropTypes.func.isRequired,
};

export default Filter;
