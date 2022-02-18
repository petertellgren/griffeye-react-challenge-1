import React from 'react';

import Button from '@mui/material/Button';
import Instructions from './Instructions';
import Solution from './Solution';

const App = () => {
  const [instructionsOpen, setInstructionsOpen] =
    React.useState<boolean>(false);

  const toggleInstructions = () => {
    setInstructionsOpen((oldState) => !oldState);
  };

  return (
    <>
      <Button onClick={toggleInstructions}>Show Instructions</Button>
      <Instructions
        isOpen={instructionsOpen}
        handleClose={toggleInstructions}
      />
      <Solution />
    </>
  );
};

export default App;
