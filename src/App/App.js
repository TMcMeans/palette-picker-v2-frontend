import React, { useState } from 'react';
import './App.css';
import { Logo } from '../Logo/Logo';

const App = () => {
  // console.dir('Render!');
  // const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <Logo />
    </div>
  );
};

export default App;
