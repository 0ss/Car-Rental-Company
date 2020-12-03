import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './Styles/mainstyles.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Searchcars from './components/Carsfetching/Searchcars'
import Addcar from './components/Addcar'
import Successfulreservation from './components/Successfulreservation'
import Myorders from './components/Myorders'

function App() {
  return (
    <Router>
      <Route path="/signup" component={Signup}/>
      <Route path="/login" component={Login}/>
      <Route path="/searchcars" component={Searchcars}/>
      <Route path="/addcar" component={Addcar}/>
      <Route path="/successfulreservation" component={Successfulreservation}/>
      <Route path="/myorders" component={Myorders}/>
    </Router>
  );
}

export default App;