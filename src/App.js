import './App.css';

import config from './services/firebase/config'



import 'firebase/database';
import 'firebase/firestore';

import { FirebaseAppProvider, useFirestoreDocData, useFirestore, SuspenseWithPerf } from 'reactfire';

function Burrito() {
  // easily access the Firestore library
  const burritoRef = useFirestore()
    .collection('tryreactfire')
    .doc('burrito');

  // subscribe to a document for realtime updates. just one line!
  const { status, data } = useFirestoreDocData(burritoRef);

  // easily check the loading status
  if (status === 'loading') {
    return <p>Fetching burrito flavor...</p>
  }

  return <p>The burrito is {data.yummy ? 'good' : 'bad'}!</p>;
}


function App() {



  return (

    <FirebaseAppProvider firebaseConfig={config}>

      <h1>🌯</h1>
      <Burrito />
    </FirebaseAppProvider>
  );
}

export default App;
