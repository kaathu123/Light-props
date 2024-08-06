import React from 'react';
import './FirstChild.css';

const FirstChild = ({ setCheck,check }) => {
  const submit = () => {
    setCheck((prev) => !prev);
  };

  return (
    <div className='button'>
      <button onClick={submit} className='btn'>
        {check ? 'Off' : 'On'}
      </button>
    </div>
  );
};

export default FirstChild;
