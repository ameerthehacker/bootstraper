import React, { useEffect } from 'react';
import NavBar from '../../components/navbar';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/core';
import { useDispatch } from 'react-redux';
import useFormat from '../../components/format';
import Libraries from '../../components/libraries';
import { ACTIONS } from '../../redux/actions';

function App() {
  const { bgColor, color } = useFormat();
  const dispatch = useDispatch();

  useEffect(() => {
    // load the available options
    dispatch({ type: ACTIONS.LOAD_DATA });
  }, [dispatch]);

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
            <TabPanel>
              <Libraries mt={5} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}

export default App;
