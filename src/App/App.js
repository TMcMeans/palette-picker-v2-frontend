import React, { useState } from 'react';
import './App.css';
import { Logo } from '../Logo/Logo';
import { NewProjectInput } from '../NewProjectInput/NewProjectInput';

const App = () => {
  // console.dir('Render!');
  // const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <Logo />
      <NewProjectInput />
    </div>
  );
};

export default App;
