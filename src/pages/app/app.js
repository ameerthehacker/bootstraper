import React from 'react';
import NavBar from '../../components/navbar';
import { Box } from '@chakra-ui/core';
import useFormat from '../../components/format';

function App() {
  const { bgColor, color } = useFormat();

  return (
    <>
      <NavBar />
      <Box p={10} height="100%" pt={20} color={color} bg={bgColor}></Box>
    </>
  );
}

export default App;
