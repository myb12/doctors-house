
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Services from './Components/Services/Services';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>

        <Route exact path="/">
          <Hero />
          <Services />
        </Route>

        <Route path="/service/:serviceId">
          <ServiceDetails />
        </Route>

        <Route path="/login">
          <SignUp />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
