import React from 'react';
import NavBar from '../../components/navbar';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/core';
import useFormat from '../../components/format';

function App() {
  const { bgColor, color } = useFormat();

  return (
    <>
      <NavBar />
      <Box p={10} height="100%" pt={20} color={color} bg={bgColor}>
        <Tabs variantColor="teal" variant="soft-rounded">
          <TabList>
            <Tab>Transpiler</Tab>
            <Tab>Library</Tab>
            <Tab>Styling</Tab>
            <Tab>Linting</Tab>
            <Tab>Code Formatting</Tab>
            <Tab>Testing</Tab>
            <Tab>Optimizations</Tab>
            <Tab>CI/CD</Tab>
            <Tab>Files</Tab>
          </TabList>
          <TabPanels>
            <TabPanel></TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}

export default App;
