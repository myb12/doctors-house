
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
import ContactUs from './Components/ContactUs/ContactUs';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';

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

          <Route path="/articles">
            <Articles />
          </Route>

          <Route path="/login">
            <SignUp />
          </Route>

          <Route path="/contact-us">
            <ContactUs />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
