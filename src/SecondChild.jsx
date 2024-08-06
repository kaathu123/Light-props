import React from 'react';
import './SecondChild.css';

const SecondChild = ({ check }) => {
  return (
    <div>
      {check ? (  
        <img
          src="https://i.pinimg.com/564x/61/5a/43/615a43eff351cbc92652c25d66e3a7e9.jpg"
          alt="Light On"
          className="light"
        />
      ) : (
        <img
          src="https://i.pinimg.com/564x/1c/99/9f/1c999f6305e76c0495dcd739e793716b.jpg"
          alt="Light Off"
          className="light"
        />
      )}
    </div>
  );
};

export default SecondChild;
