
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Services from './Components/Services/Services';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import SignUp from './Components/SignUp/SignUp';
import Articles from './Components/Articles/Articles';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        
        <Switch>
          <Route exact path="/">
            <Hero />
            <Services />
          </Route>

          <Route exact path="/home">
            <Hero />
            <Services />
          </Route>

          <PrivateRoute path="/service/:serviceId">
            <ServiceDetails />
          </PrivateRoute>

          <Route path="/login">
            <SignUp />
          </Route>

          <Route path="/latest-articles">
            <Articles />
          </Route>
        </Switch>

      </Router>
    </AuthProvider>
  );
}

export default App;
