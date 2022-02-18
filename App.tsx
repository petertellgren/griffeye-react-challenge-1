import React from 'react';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Readme from './Readme';
import Solution from './Solution';

const App = () => {
  const [readmeOpen, setReadmeOpen] = React.useState<boolean>(false);

  const toggleReadme = () => {
    setReadmeOpen((oldState) => !oldState);
  };

  return (
    <Container>
      <Button onClick={toggleReadme}>Show Instructions</Button>
      <Readme isOpen={readmeOpen} handleClose={toggleReadme} />
      <Solution />
    </Container>
  );
};

export default App;
