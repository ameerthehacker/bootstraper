import React from 'react';
import ReactDom from 'react-dom';
import App from './pages/app';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

function Root() {
  return (
    <ThemeProvider>
      <CSSReset />
      <App />
    </ThemeProvider>
  );
}

ReactDom.render(<Root />, document.getElementById('root'));
