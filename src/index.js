import React from 'react';
import ReactDom from 'react-dom';
import App from './pages/app';
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';
import './index.css';

const reduxStore = createStore(rootReducer);

function Root() {
  return (
    <ThemeProvider>
      <CSSReset />
      <ColorModeProvider>
        <Provider store={reduxStore}>
          <App />
        </Provider>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

ReactDom.render(<Root />, document.getElementById('root'));
