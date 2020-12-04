import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './styles/main_styles.css'
import Signup from './components/signup'
import Login from './components/login'
import SearchCars from './components/cars_fetching/search_cars'
import AddCar from './components/add_car'
import SuccessfulReservation from './components/successful_reservation'
import MyOrders from './components/my_orders'
import ResetPassword from './components/reset_password'

function App() {
  return (
    <Router>
      <Route path="/signup" component={Signup}/>
      <Route path="/login" component={Login}/>
      <Route path="/searchcars" component={SearchCars}/>
      <Route path="/addcar" component={AddCar}/>
      <Route path="/successfulreservation" component={SuccessfulReservation}/>
      <Route path="/myorders" component={MyOrders}/>
      <Route path="/resetpassword" component={ResetPassword}/>

    </Router>
  );
}

export default App;