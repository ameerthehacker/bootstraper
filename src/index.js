import React from 'react';
import ReactDom from 'react-dom';
import App from './pages/app';
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';

function Root() {
  return (
    <ThemeProvider>
      <CSSReset />
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

ReactDom.render(<Root />, document.getElementById('root'));
