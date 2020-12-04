import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {fireBaseConfig} from './services/firebase/config'

/*
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element');
}

unstable_createRoot(rootElement).render(<ConcurrentModeApp firebaseConfig={fireBaseConfig} />);

There was some errors some so I commented them 

*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);