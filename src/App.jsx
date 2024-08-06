import React, { useState } from 'react';
import FirstChild from './FirstChild';
import SecondChild from './SecondChild';

const App = () => {
  const [check, setCheck] = useState(false);

  return (
    <div>
      <FirstChild setCheck={setCheck} check={check} />
      <SecondChild check={check} />
    </div>
  );
}

export default App;
