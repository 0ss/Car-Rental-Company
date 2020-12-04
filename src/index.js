import React from 'react';
import { unstable_createRoot } from 'react-dom';
import { AppWrapper as ConcurrentModeApp } from './App';
import {fireBaseConfig} from './services/firebase/config'


const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element');
}

unstable_createRoot(rootElement).render(<ConcurrentModeApp firebaseConfig={fireBaseConfig} />);


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );