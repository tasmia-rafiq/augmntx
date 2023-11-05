import React, { useState } from 'react';
import './SearchSkill.css';

const SearchSkill = ({ onSearch }) => {
  const [inputText, setInputText] = useState("");

  const inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    onSearch(lowerCase);
  };

  return (
    <form className='search_skill'>
      <input
        type="text"
        placeholder='Search for skills'
        value={inputText}
        onChange={inputHandler}
      />
    </form>
  );
}

export default SearchSkill;
