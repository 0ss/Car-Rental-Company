import './App.css';

import fireBaseConfig from './services/firebase/config'

import 'firebase/database';
import 'firebase/firestore';

import { FirebaseAppProvider, useFirestoreDocData, useFirestore } from 'reactfire';

function Write(){

    useFirestore()
    .collection('test')
    .doc('write').set({test : "test"});

    return <h2> I wrote something!</h2>

}

function Burrito() {

  // easily access the Firestore library
  const burritoRef = useFirestore()
    .collection('test')
    .doc('write');

  // subscribe to a document for realtime updates. just one line!
  const { status, data } = useFirestoreDocData(burritoRef);

  // easily check the loading status
  if (status === 'loading') {
    return <p>Fetching burrito flavor...</p>
  }

  return <p>The test is {data.test === 'test' ? 'good' : 'bad'}!</p>;
}


function App() {



  return (

    <FirebaseAppProvider firebaseConfig={fireBaseConfig}>

      <h1>🍍</h1>
      <Burrito />
      <Write/>

    </FirebaseAppProvider>
  );
}

export default App;
