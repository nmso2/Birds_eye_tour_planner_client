import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import SignUp from './pages/SignUp/SignUp';
import NotFound from './pages/NotFound/NotFound';
import PurchasePlan from './pages/PurchasePlan/PurchasePlan';
import Footer from './pages/Shared/Footer/Footer';
import MyPlans from './pages/MyPlans/MyPlans/MyPlans';
import ManagePlans from './pages/ManagePlans/ManagePlans';
import 'react-accessible-accordion/dist/fancy-example.css';
import AddPlans from './pages/AddPlans/AddPlans';
import UserProfile from './pages/UserProfile/UserProfile';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/tourPlans/:ID">
              <PurchasePlan></PurchasePlan>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path="/myPlans">
              <MyPlans></MyPlans>
            </PrivateRoute>
            <PrivateRoute path="/profile">
              <UserProfile></UserProfile>
            </PrivateRoute>
            <PrivateRoute path="/managePlans">
              <ManagePlans></ManagePlans>
            </PrivateRoute>
            <PrivateRoute path="/addPlans">
              <AddPlans></AddPlans>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
