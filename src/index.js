import React from 'react';
import ReactDom from 'react-dom';
import App from './pages/app';
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import './index.css';

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
