import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './styles/main_styles.css'
import SignUp from './components/Signup'
import Login from './components/Login'
import SearchCars from './components/cars_fetching/SearchCars'
import AddCar from './components/admin/AddCar'
import SuccessfulReservation from './components/SuccessfulReservation'
import MyOrders from './components/MyOrders'
import ResetPassword from './components/ResetPassword'
import ViewCar from './components/ViewCar'
import Home from './components/Home'






const App = () => {



 

  return (

    <Router>
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/searchcars" component={SearchCars} />
      <Route path="/admin/addcar" component={AddCar} />
      <Route path="/successfulreservation" component={SuccessfulReservation} />
      <Route path="/myorders" component={MyOrders} />
      <Route path="/resetpassword" component={ResetPassword} />
      <Route path="/viewcar" component={ViewCar} />
      <Route exact path="/" component={Home} />



    </Router>

  );
}


export default App;