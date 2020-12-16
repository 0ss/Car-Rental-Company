import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './styles/main_styles.css'
import SignUp from './components/auth/Signup'
import Login from './components/auth/Login'
import ResetPassword from './components/auth/ResetPassword'
import SearchCars from './components/cars_search/SearchCars'
import AddCar from './components/admin/AddCar'
import AllOrders from './components/admin/AllOrders'
import ViewReservation from './components/order/ViewReservation'
import MyOrders from './components/order/MyOrders'
import ViewCar from './components/view_car/ViewCar'
import PrivacyPolicy from './components/privacy/PrivacyPolicy'
import TermsConditions from './components/privacy/TermsConditions'
import Home from './components/Home'
import { SiteLocations } from './constants/Constants'
import Footer from './styles/layout/Footer';
import Navbar from './styles/layout/Navbar';





const App = () => {

  return (



    <Router>

      <div class='main-container'>

        <Navbar />

        <Route path={SiteLocations.signUp} component={SignUp} />
        <Route path={SiteLocations.login} component={Login} />
        <Route path={SiteLocations.searchCars} component={SearchCars} />
        <Route path={SiteLocations.adminAddCar} component={AddCar} />
        <Route path={SiteLocations.adminAllOrders} component={AllOrders} />
        <Route path={SiteLocations.viewReservation} component={ViewReservation} />
        <Route path={SiteLocations.myOrders} component={MyOrders} />
        <Route path={SiteLocations.restPassword} component={ResetPassword} />
        <Route path={SiteLocations.viewCar} component={ViewCar} />
        <Route path={SiteLocations.privacyPolicy} component={PrivacyPolicy} />
        <Route path={SiteLocations.termsConditions} component={TermsConditions} />
        <Route exact path={SiteLocations.home} component={Home} />

        <Footer />

      </div>

    </Router>

  );
}


export default App;