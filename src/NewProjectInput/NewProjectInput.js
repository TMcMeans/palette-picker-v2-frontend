import React, { useState } from 'react';
import './NewProjectInput.css';

export const NewProjectInput = () => {
  //useState hook returns an array with value and setter method for changing value in state
  const [projectName, setProjectName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    //set UI view to show that project was saved successfully (loader? or simple message?)
    console.log(`POSTING ${projectName} to database`);
  };

  return (
    <div>
      <h4>Create a new project here</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="new project name"
          value={projectName}
          onChange={e => setProjectName(e.target.value)}
        />
        <input type="submit" value="Save project" />
      </form>
    </div>
  );
};
