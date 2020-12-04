import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './styles/main_styles.css'
import SignUp from './components/SignUp'
import Login from './components/Login'
import SearchCars from './components/cars_fetching/SearchCars'
import AddCar from './components/AddCar'
import SuccessfulReservation from './components/SuccessfulReservation'
import MyOrders from './components/MyOrders'
import ResetPassword from './components/ResetPassword'
import {
  FirebaseAppProvider,
  preloadAuth,
  preloadDatabase,
  preloadFirestore,
  preloadFirestoreDoc,
  preloadRemoteConfig,
  preloadStorage,
  preloadUser,
  useFirebaseApp
} from 'reactfire';
import 'firebase/auth';

const preloadSDKs = firebaseApp => {
  return Promise.all([
    preloadFirestore({
      firebaseApp,
      setup(firestore) {
        return firestore().enablePersistence();
      }
    }),
    preloadDatabase({ firebaseApp }),
    preloadStorage({
      firebaseApp,
      setup(storage) {
        return storage().setMaxUploadRetryTime(10000);
      }
    }),
    preloadAuth({ firebaseApp }),
    preloadRemoteConfig({
      firebaseApp,
      setup(remoteConfig) {
        remoteConfig().settings = {
          minimumFetchIntervalMillis: 10000,
          fetchTimeoutMillis: 10000
        };
        return remoteConfig().fetchAndActivate();
      }
    })
  ]);
};

const preloadData = async firebaseApp => {
  const user = await preloadUser({ firebaseApp });

  if (user) {
    await preloadFirestoreDoc(firestore => firestore.doc('count/counter'), firebaseApp);
  }
};

export const AppWrapper = ({ firebaseConfig }) => {
  return (
    <div className="flex flex-wrap justify-around p-4">
      <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
        <App />
      </FirebaseAppProvider>
    </div>
  );
};


 const App = () => {

  /*const firebaseApp = useFirebaseApp();
  preloadSDKs(firebaseApp).then(() => preloadData(firebaseApp));*/

  return (

    <Router>
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/searchcars" component={SearchCars} />
      <Route path="/addcar" component={AddCar} />
      <Route path="/successfulreservation" component={SuccessfulReservation} />
      <Route path="/myorders" component={MyOrders} />
      <Route path="/resetpassword" component={ResetPassword} />

    </Router>

  );
}

export default App;