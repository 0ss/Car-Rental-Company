import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './styles/main_styles.css'
import SignUp from './components/auth/Signup'
import Login from './components/auth/Login'
import ResetPassword from './components/auth/ResetPassword'
import SearchCars from './components/cars_fetching/SearchCars'
import AddCar from './components/admin/AddCar'
import AllOrders from './components/admin/AllOrders'
import ViewReservation from './components/ViewReservation'
import MyOrders from './components/MyOrders'
import ViewCar from './components/ViewCar'
import Home from './components/Home'
import {SiteLocations} from './constants/Constants'





const App = () => {

  return (

    <Router>
      <Route path={SiteLocations.signUp} component={SignUp} />
      <Route path={SiteLocations.login} component={Login} />
      <Route path={SiteLocations.searchCars} component={SearchCars} />
      <Route path={SiteLocations.adminAddCar} component={AddCar} />
      <Route path={SiteLocations.adminAllOrders} component={AllOrders} />
      <Route path={SiteLocations.viewReservation} component={ViewReservation} />
      <Route path={SiteLocations.myOrders} component={MyOrders} />
      <Route path={SiteLocations.restPassword} component={ResetPassword} />
      <Route path={SiteLocations.viewCar} component={ViewCar} />
      <Route exact path={SiteLocations.home} component={Home} />



    </Router>

  );
}


export default App;